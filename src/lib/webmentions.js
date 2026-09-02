const DEFAULT_API_URL = 'https://webmention.io/api/mentions.jf2';
const DEFAULT_MAX_CONTENT_LENGTH = 220;
const DEFAULT_PER_PAGE = 20;
const CONTEXT_TAGS = ['P', 'LI', 'BLOCKQUOTE'];
const FALLBACK_LOCALE_PREFIXES = ['/es'];
const INTERACTION_PROPERTIES = new Set(['like-of', 'repost-of', 'bookmark-of']);

export function getMentionType(mention, labels = {}) {
  const property = mention?.['wm-property'];
  const defaults = {
    'like-of': 'Like',
    'repost-of': 'Repost',
    'bookmark-of': 'Bookmark',
    'in-reply-to': 'Reply',
    mention: 'Mention',
  };

  return labels[property] || defaults[property] || labels.mention || defaults.mention;
}

export function cleanText(value) {
  return String(value || '').replace(/\s+/g, ' ').trim();
}

function getPathnameVariants(pathname, i18n) {
  const normalizedPathname = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const configuredLocalePrefixes = (i18n?.locales || [])
    .filter((locale) => locale !== i18n?.defaultLocale)
    .map((locale) => `/${locale}`);
  const localePrefixes = configuredLocalePrefixes.length > 0
    ? configuredLocalePrefixes
    : FALLBACK_LOCALE_PREFIXES;
  const pathnames = new Set([normalizedPathname]);

  localePrefixes.forEach((prefix) => {
    if (normalizedPathname === prefix) {
      pathnames.add('/');
      return;
    }

    if (normalizedPathname.startsWith(`${prefix}/`)) {
      pathnames.add(normalizedPathname.slice(prefix.length) || '/');
      return;
    }

    pathnames.add(normalizedPathname === '/' ? prefix : `${prefix}${normalizedPathname}`);
  });

  return [...pathnames];
}

export function getCanonicalTargets({siteUrl, pathname = '/', i18n} = {}) {
  if (!siteUrl) {
    return [];
  }

  const baseUrl = new URL(siteUrl);
  const hosts = baseUrl.hostname.startsWith('www.')
    ? [baseUrl.hostname, baseUrl.hostname.replace(/^www\./, '')]
    : [baseUrl.hostname, `www.${baseUrl.hostname}`];

  return [...new Set(getPathnameVariants(pathname, i18n).flatMap((pathnameVariant) => (
    hosts.flatMap((hostname) => {
      const targetUrl = new URL(pathnameVariant, siteUrl);
      targetUrl.hostname = hostname;
      targetUrl.hash = '';
      targetUrl.search = '';

      const canonicalUrl = targetUrl.toString();
      const withoutSlash = canonicalUrl.replace(/\/$/, '');

      return [canonicalUrl, withoutSlash];
    })
  )))];
}

export function getCanonicalTargetsFromDocument(doc = document) {
  const canonical = doc.querySelector('link[rel="canonical"]')?.href || doc.location?.href;

  if (!canonical) {
    return [];
  }

  const url = new URL(canonical);

  return getCanonicalTargets({
    siteUrl: url.origin,
    pathname: url.pathname,
  });
}

export function formatMentionDate(value, locale) {
  if (!value) {
    return null;
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
}

function normalizeUrl(value, base) {
  if (!value) {
    return null;
  }

  try {
    const url = new URL(value, base);
    url.hash = '';

    return url.toString().replace(/\/$/, '');
  } catch {
    return null;
  }
}

function normalizeMentionText(value, mention = {}) {
  const text = cleanText(value).replace(/^\?{2,}\s*/, '');
  const name = cleanText(mention.name).replace(/^\?{2,}\s*/, '');

  if (name && text.indexOf(name) === 0) {
    return cleanText(text.slice(name.length));
  }

  return text
    .replace(/([A-Za-zÁÉÍÓÚÜÑáéíóúüñ])(\d)/g, '$1 $2')
    .replace(/(\d)([A-Za-zÁÉÍÓÚÜÑáéíóúüñ])/g, '$1 $2')
    .replace(/\s+/g, ' ')
    .trim();
}

function moveStartToWordBoundary(content, start, focusIndex) {
  if (start === 0) {
    return start;
  }

  const nextSpace = content.slice(start).search(/\s/);
  const nextStart = nextSpace === -1 ? start : start + nextSpace + 1;

  return nextStart < focusIndex ? nextStart : start;
}

function moveEndToWordBoundary(content, end, focusEnd) {
  if (end === content.length) {
    return end;
  }

  const previousSpace = content.slice(0, end).lastIndexOf(' ');

  return previousSpace > focusEnd ? previousSpace : end;
}

export function excerptText(value, {
  focus,
  focusIndex,
  mention,
  maxLength = DEFAULT_MAX_CONTENT_LENGTH,
} = {}) {
  const content = normalizeMentionText(value, mention);

  if (!content) {
    return null;
  }

  if (content.length <= maxLength) {
    return content;
  }

  const focusedText = cleanText(focus);
  const resolvedFocusIndex = Number.isInteger(focusIndex)
    ? focusIndex
    : focusedText ? content.indexOf(focusedText) : -1;

  if (resolvedFocusIndex === -1) {
    const end = moveEndToWordBoundary(content, maxLength - 3, 0);

    return `${content.slice(0, end)}...`;
  }

  const maxContextLength = maxLength - 6;
  const roomAroundFocus = Math.max(maxContextLength - focusedText.length, 0);
  const focusEnd = resolvedFocusIndex + focusedText.length;
  const start = Math.max(0, resolvedFocusIndex - Math.floor(roomAroundFocus / 2));
  const end = Math.min(content.length, start + maxContextLength);
  const adjustedStart = Math.max(0, end - maxContextLength);
  const wordStart = moveStartToWordBoundary(content, adjustedStart, resolvedFocusIndex);
  const wordEnd = moveEndToWordBoundary(content, end, focusEnd);
  const excerpt = content.slice(wordStart, wordEnd);

  return `${wordStart > 0 ? '...' : ''}${excerpt}${wordEnd < content.length ? '...' : ''}`;
}

function getLinkContext(context, link) {
  if (context === link) {
    return {
      text: cleanText(link.textContent),
      focusIndex: 0,
    };
  }

  const marker = '__webmention_link_context__';

  link.insertAdjacentText('beforebegin', marker);
  link.insertAdjacentText('afterend', marker);

  const markedText = cleanText(context.textContent);
  const focusIndex = markedText.indexOf(marker);
  const text = cleanText(markedText.replaceAll(marker, ''));

  return {text, focusIndex};
}

function findLinkContext(html, target, source, maxLength) {
  if (!html || typeof DOMParser === 'undefined') {
    return null;
  }

  const normalizedTarget = normalizeUrl(target);
  if (!normalizedTarget) {
    return null;
  }

  const doc = new DOMParser().parseFromString(html, 'text/html');
  const link = [...doc.querySelectorAll('a[href]')].find((anchor) => (
    normalizeUrl(anchor.getAttribute('href'), source) === normalizedTarget
      || normalizeUrl(anchor.href) === normalizedTarget
  ));

  if (!link) {
    return null;
  }

  const context = CONTEXT_TAGS.includes(link.parentElement?.tagName)
    ? link.parentElement
    : link.closest(CONTEXT_TAGS.map((tagName) => tagName.toLowerCase()).join(','));
  const {text, focusIndex} = getLinkContext(context || link, link);

  return excerptText(text, {
    focus: link.textContent,
    focusIndex,
    maxLength,
  });
}

export function getMentionContent(mention, options = {}) {
  return findLinkContext(
    mention.content?.html,
    mention['wm-target'],
    mention['wm-source'],
    options.maxLength,
  )
    || excerptText(mention.content?.text, {...options, mention})
    || excerptText(mention.content?.html, {...options, mention});
}

export function getMentionSourceUrl(mention, content) {
  const sourceUrl = mention.url || mention['wm-source'];
  const fragmentText = cleanText(content).replace(/^\.\.\./, '').replace(/\.\.\.$/, '');

  if (!sourceUrl || !fragmentText) {
    return sourceUrl;
  }

  try {
    const url = new URL(sourceUrl);
    url.hash = `:~:text=${encodeURIComponent(fragmentText)}`;

    return url.toString();
  } catch {
    return sourceUrl;
  }
}

function getAuthorKey(mention) {
  const author = mention.author || {};

  return cleanText(author.url || author.name || author.photo || mention.url || mention['wm-source']);
}

export function groupWebmentions(mentions) {
  const interactionAuthors = new Set();
  const interactions = [];
  const threads = [];

  mentions.forEach((mention) => {
    if (!mention || !(mention.url || mention['wm-source'])) {
      return;
    }

    if (INTERACTION_PROPERTIES.has(mention['wm-property'])) {
      const key = getAuthorKey(mention);

      if (!interactionAuthors.has(key)) {
        interactions.push(mention);
        interactionAuthors.add(key);
      }

      return;
    }

    threads.push(mention);
  });

  return {interactions, threads};
}

export async function fetchWebmentions({
  targets,
  apiUrl = DEFAULT_API_URL,
  perPage = DEFAULT_PER_PAGE,
  signal,
} = {}) {
  const resolvedTargets = targets?.length ? targets : getCanonicalTargetsFromDocument();
  const params = new URLSearchParams({
    'per-page': String(perPage),
    'sort-by': 'published',
    'sort-dir': 'down',
  });

  resolvedTargets.forEach((target) => params.append('target[]', target));

  const response = await fetch(`${apiUrl}?${params.toString()}`, {signal});

  if (!response.ok) {
    throw new Error(`Webmention.io responded with ${response.status}`);
  }

  const data = await response.json();

  return Array.isArray(data.children) ? data.children : [];
}

function appendText(parent, text) {
  parent.appendChild(document.createTextNode(text));
}

function createInteractionItem(mention, classNames) {
  const item = document.createElement('li');
  const author = mention.author || {};
  const url = mention.url || mention['wm-source'] || author.url || '#';

  item.className = classNames.facepileItem;

  const link = document.createElement('a');
  link.className = classNames.facepileLink;
  link.href = url;
  link.rel = 'nofollow noopener';
  link.target = '_blank';
  link.title = `${cleanText(author.name) || 'Someone'} - ${getMentionType(mention)}`;

  if (author.photo) {
    const image = document.createElement('img');
    image.className = classNames.facepilePhoto;
    image.src = author.photo;
    image.alt = '';
    image.loading = 'lazy';
    image.width = 32;
    image.height = 32;
    link.appendChild(image);
  } else {
    link.textContent = (cleanText(author.name) || '?').slice(0, 1).toUpperCase();
  }

  item.appendChild(link);

  return item;
}

function createThreadItem(mention, classNames, labels, locale, maxLength) {
  const item = document.createElement('li');
  const author = mention.author || {};
  const published = mention.published || mention['wm-received'];
  const formattedDate = formatMentionDate(published, locale);
  const content = getMentionContent(mention, {maxLength});
  const sourceUrl = getMentionSourceUrl(mention, content);

  item.className = classNames.threadItem;

  if (author.photo && classNames.threadPhoto) {
    const image = document.createElement('img');
    image.className = classNames.threadPhoto;
    image.src = author.photo;
    image.alt = '';
    image.loading = 'lazy';
    image.width = 40;
    image.height = 40;
    item.appendChild(image);
  }

  const body = document.createElement('div');
  body.className = classNames.threadBody;

  const meta = document.createElement('p');
  meta.className = classNames.threadMeta;

  const link = document.createElement('a');
  link.className = classNames.threadAuthor;
  link.href = sourceUrl || author.url || '#';
  link.rel = 'nofollow noopener';
  link.target = '_blank';
  link.textContent = cleanText(author.name) || cleanText(mention.name) || 'Someone';
  meta.appendChild(link);
  appendText(meta, ` ${getMentionType(mention, labels)}`);

  if (formattedDate) {
    const time = document.createElement('time');
    time.className = 'dt-published';
    time.dateTime = published;
    time.textContent = ` · ${formattedDate}`;
    meta.appendChild(time);
  }

  body.appendChild(meta);

  if (content || labels.fallbackContent) {
    const contentElement = document.createElement('p');
    contentElement.className = classNames.threadContent;
    contentElement.textContent = content || labels.fallbackContent || 'Mentioned this page.';
    body.appendChild(contentElement);
  }

  item.appendChild(body);

  return item;
}

export async function renderWebmentions({
  container,
  list,
  facepile,
  targets,
  labels = {},
  locale,
  classNames = {},
  maxLength = DEFAULT_MAX_CONTENT_LENGTH,
  perPage = DEFAULT_PER_PAGE,
} = {}) {
  if (!container || !window.fetch) {
    return {interactions: [], threads: []};
  }

  const resolvedClassNames = {
    facepile: 'webmentions__facepile',
    facepileItem: 'webmentions__facepile-item',
    facepileLink: 'webmentions__facepile-link',
    facepilePhoto: 'webmentions__facepile-photo',
    threadList: 'webmentions__list',
    threadItem: 'webmentions__item h-cite',
    threadBody: 'webmentions__body',
    threadMeta: 'webmentions__meta',
    threadAuthor: 'webmentions__author p-author h-card',
    threadContent: 'webmentions__content p-content',
    threadPhoto: '',
    ...classNames,
  };
  const threadList = list || container.querySelector(`.${resolvedClassNames.threadList}`);
  const facepileList = facepile || container.querySelector(`.${resolvedClassNames.facepile}`);
  const mentions = await fetchWebmentions({targets, perPage});
  const groups = groupWebmentions(mentions);

  if (!groups.interactions.length && !groups.threads.length) {
    container.setAttribute('aria-hidden', 'true');
    return groups;
  }

  if (facepileList) {
    facepileList.replaceChildren(...groups.interactions.map((mention) => (
      createInteractionItem(mention, resolvedClassNames)
    )));
  }

  if (threadList) {
    threadList.replaceChildren(...groups.threads.map((mention) => (
      createThreadItem(mention, resolvedClassNames, labels, locale, maxLength)
    )));
  }

  container.setAttribute('aria-hidden', 'false');

  return groups;
}
