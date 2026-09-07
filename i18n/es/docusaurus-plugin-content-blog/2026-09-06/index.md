---
slug: second-steps-into-the-indieweb
title: 🌿 Segundos pasos en la IndieWeb
description: Publicar en mi propio dominio ya es rutina, pero seguir al resto de la web desde él sigue siendo una casilla vacía.
authors: [hhkaos]
tags: [IndieWeb, Webmentions, POSSE, Micropub, Microsub, Web Personal]
---

Hace unos días escribí sobre mis [primeros pasos en la IndieWeb](/es/blog/first-steps-into-the-indieweb): hacer más semántico el HTML, usar mi web como un hub de identidad, referencias a webs usando Webmentions enviadas a mano con `curl` y un servidor [Micropub](https://indieweb.org/Micropub) que acababa de echar a andar.

Desde entonces he seguido incorporando cosas nuevas, y he cambiado tantas cosas que quería escribir un segundo post antes de olvidar todo lo que he hecho. La versión corta: **publicar lo tengo casi resuelto, seguir aún no**.

## POSSE: publicar en mi sitio, sindicar en el resto

[POSSE](https://indieweb.org/POSSE) fue el concepto que me enganchó de la IndieWeb, y que diría que ya está funcionando de verdad. Vamos a ver las dos partes, "POS" y "SE":
- **POS** (***P**ublish (on your) **O**wn **S**ite*): publicar primero en tu propio sitio/dominio.
- **SE** (***S**yndicate **E**lsewhere*):  repartir después copias (a las plataformas donde está la gente). 

En las siguientes secciones explico cómo lo estoy implementando yo.

### Publicar primero en mi sitio

Tengo un pequeño servidor [Indiekit](https://getindiekit.com/) privado que me sirve de endpoint [Micropub](https://indieweb.org/Micropub) para postear contenido.

Cuando creo algo desde ahí, se guarda en un [repositorio de GitHub](https://github.com/hhkaos/posts.rauljimenez.info), y una GitHub Action se encarga de parsearlo y renderizarlo en [posts.rauljimenez.info](https://posts.rauljimenez.info/). Con esto consigo que mi web se convierta en la copia "canónica", y todo lo demás es una copia de ella.

Los tipos de post con los que he empezado a probar son: likes, replies, asistencias a eventos (RSVPs), eventos, fotos, bookmarks, reseñas, check-ins, y entradas de "leído" y "visto". Hay más tipos configurados, pero todavía no los he usado (ej: reposts, artículos, y "escuchado").

A continuación puedes ver un pantallazo de la interfaz web de publicación con los diferentes tipos de posts:

<div style={{textAlign: 'center'}}>

  ![Pantalla de Indiekit con la lista de tipos de post disponibles: Article, Bookmark, Check-in, Event, Like, Listen, Note, Photo, Read, Reply, Repost, Review, RSVP y Watch](/img/blogs/second-steps-into-the-indieweb/indiekit-post-types.png)

</div>

Cada tipo tiene un formulario con campos distintos que captura la información que luego se traducirá a campos [Microformats2](http://microformats.org/wiki/microformats2) concretos. Eso es lo que después permite que otra web entienda que lo que he publicado es una respuesta, un "me gusta" o una reseña, y no simplemente un texto suelto.

Para publicar, al principio probé [Quill](https://quill.p3k.io/) como cliente Micropub, pero como decía, al final solo estoy usando la propia interfaz de Indiekit que alojo yo, y que he personalizado para poder publicar tipos de posts que no estaban soportados allí (ej: reseñas, lecturas, visionados y eventos). 

Gracias a [IndieAuth](https://indieweb.org/IndieAuth) y a la API de mi servidor, en realidad puedo publicar con cualquier cliente Micropub. A continuación puedes ver por ejemplo, cómo me logueo en Quill usando mi propio dominio:

<div style={{textAlign: 'center'}}>

  ![Los tres pasos del login con IndieAuth: escribo la URL de mi web en Quill, mi propio servidor me pide permiso indicando qué va a poder hacer la aplicación, y tras autorizarla Quill ya puede publicar en mi dominio](/img/blogs/second-steps-into-the-indieweb/indieauth-login.png)

</div>

### Sindicar después en Mastodon y Bluesky

He configurado Indiekit para que cuando cree un nuevo "post" (contenido), pueda sindicarlo/publicarlo en [Mastodon](https://mastodon.social/@hhkaos) y [Bluesky](https://bsky.app/profile/rauljimenez.info).

Cuando estoy creando el post tengo dos casillas al final del formulario que puedo marcar. Si no las marco, el post se queda **solo** en mi web. Por si te lo estabas preguntando, aquí explico [qué sentido tiene publicar algo en mi web y no distribuirlo](https://posts.rauljimenez.info/about/#why-not-shared). Y si marco las casillas, las copias se distribuyen unos minutos después.

<div style={{textAlign: 'center'}}>

  ![Formulario de Indiekit para crear un post de tipo foto, con la sección ’Syndicate to’ resaltada al final y una casilla para Mastodon y otra para Bluesky](/img/blogs/second-steps-into-the-indieweb/indiekit-create-photo-post.png)

</div>

El texto se personaliza en [posts.rauljimenez.info](https://posts.rauljimenez.info/) y las URLs de los posts en redes se escriben de vuelta en el post original como enlaces `class="u-syndication"`, para que la versión canónica sepa dónde se ha distribuido, de esto se encarga Indiekit.

Dos limitaciones de este sistema:
- Editar un post no permite actualizar las copias distribuidas.
- Y aún tengo que resolver cómo publicar a otras plataformas populares, pero con APIs restringidas, como LinkedIn, X, Instagram, etc.

## Comunicación entre webs

Esto se trata de que pueda avisar cuando yo enlazo a alguien, y recibir un aviso cuando alguien me enlace a mí. Las [Webmentions](https://indieweb.org/Webmention) son el mecanismo que se usa para esto.

### Comentar en la web de otra persona

Cuando uno de mis posts enlaza a algún sitio, el proceso de "build" descubre el endpoint del destino y le avisa. Este es el resultado: escribo [un reply en mi web](https://posts.rauljimenez.info/replies/2026/09/01/9821c), y mi comentario acaba apareciendo bajo [el artículo original de otra persona](https://www.swyx.io/learn-in-public/), sin haber tenido que crearme una cuenta en ningún sitio.

![A la izquierda, un reply publicado en posts.rauljimenez.info respondiendo al artículo ’Learn In Public’ de swyx. A la derecha, ese mismo comentario aparece en la sección de Webmentions del artículo original en swyx.io](/img/blogs/second-steps-into-the-indieweb/outgoing-webmention-to-swyx.png)

Los artículos normales que publico en este blog (usando Docusaurus), como este, todavía no están automatizados, así que para ellos tengo que seguir enviando las menciones a mano (de momento). 

Eso sí, ya no con el `curl` del post anterior: ahora uso [webmention.app](https://webmention.app/), al que le paso la URL del artículo y él solo rastrea todos sus enlaces, descubre cuáles soportan Webmentions y les envía la notificación. Sigo teniendo que hacerlo yo manualmente, pero una vez por artículo en lugar de una por destino. 

De hecho, es así es como la mención de [mi post anterior](/es/blog/first-steps-into-the-indieweb) acabó en el pie de [mi propia página de enlaces](https://links.rauljimenez.info/).

![A la izquierda, el artículo ’Primeros pasos en la IndieWeb’ enlazando a la página de enlaces. A la derecha, links.rauljimenez.info mostrando esa mención en su sección ’Mentions’](/img/blogs/second-steps-into-the-indieweb/outgoing-webmention-to-links.png)

### Recibir y mostrar lo que llega

Para las Webmentions entrantes uso [webmention.io](https://webmention.io/), un servicio alojado gestionado por Aaron Parecki, y gracias a él ahora los *likes*, *reposts* y respuestas se muestran:
- Bajo los artículos de este blog
- Bajo cada post en [posts.rauljimenez.info](https://posts.rauljimenez.info/)
- Bajo los enlaces en [links.rauljimenez.info](https://links.rauljimenez.info/)
 
Los tres dominios usan [el mismo widget](https://www.npmjs.com/package/@hhkaos/webmentions-widget), el cual, debido a problemas con webmention.io (que comentaré más adelante) usa un "archivo" o "snapshot" diario de las menciones, en vez de recuperarlas en tiempo real. Al fin y al cabo, tampoco tengo tantas visitas que vayan a echarlo en falta, y lo que realmente quiero es poder mantener una copia y unificar esta presencia e interacción.

### Recuperar las reacciones de las redes sociales

Y la pieza que cierra el círculo es [Bridgy](https://brid.gy/). Está conectado a Mastodon y Bluesky solo en modo *[backfeed](https://indieweb.org/backfeed)*. De lo que se encarga es de que cuando alguien da un *like*/*fav*, *respost* o responde a una de las copias sindicadas en redes sociales, esa reacción vuelva (como Webmention) a mi post original. Así la conversación que antes se quedaba solo en una red, acaba en mi propio dominio.

Aquí se ve con un caso real: [Wojtek Powiertowski](https://mastodon.social/@wojtekpow) marcó como favorito en Mastodon [la publicación que anunciaba mi post anterior](https://mastodon.social/@hhkaos/117196043964695624), y ese corazón terminó apareciendo en [la cabecera del artículo](/es/blog/first-steps-into-the-indieweb), en mi web.

![A la derecha, la publicación en Mastodon anunciando el artículo ’First steps into the IndieWeb’ con un favorito. A la izquierda, ese mismo favorito mostrado como ’Reactions from the web’ en la cabecera del artículo en www.rauljimenez.info](/img/blogs/second-steps-into-the-indieweb/backfeed-mastodon-to-blog.png)

Juntando todas las piezas anteriores, el recorrido completo de por ejemplo, una foto queda así: [la publico una sola vez en mi web](https://posts.rauljimenez.info/photos/2026/09/01/e4bdf/), se distribuye [a Mastodon](https://mastodon.social/@hhkaos/117198456449142509) y [a Bluesky](https://bsky.app/profile/did:plc:gwbqjf3ciffqeedjrpmjinfo/post/3muimbqf3ik2i), y las reacciones que reciben esas copias en redes vuelven a la versión original en mi web. Un único sitio donde publicar, **un único sitio donde unificar y leer todo lo que responde la gente**.

![Recorrido completo de un post de tipo foto: se publica en posts.rauljimenez.info, se distribuye a Mastodon y Bluesky, y los ’me gusta’ recibidos en esas copias vuelven como Webmentions al post original](/img/blogs/second-steps-into-the-indieweb/posse-backfeed-photo.png)

### Y también los comentarios

Hasta ahora solo hemos hablado de *likes* y *reposts*, pero **también vuelven las conversaciones**.

Por ejemplo, cuando anuncié [las charlas que voy a dar en el próximo Esri DevTech Summit](https://posts.rauljimenez.info/events/2026/09/01/esri-european-developer-and-technology-summit/) en Mastodon y Bluesky, [Iván Sánchez](https://mastodon.social/@IvanSanchez) me hizo una buena pregunta por Mastodon que acabó en un hilo de varios mensajes. Todos esos mensajes están ahora bajo el evento en mi web, en "Respuestas de la web", junto a los *likes* de Bluesky.

![Recorrido completo de un evento: se publica en posts.rauljimenez.info, se distribuye a Bluesky y a Mastodon, y tanto las reacciones como los comentarios del hilo de Mastodon vuelven y se muestran bajo el evento original](/img/blogs/second-steps-into-the-indieweb/Indieweb-Event-with-comments.png)

Lo que más me gusta es que esa conversación no se queda solo en la plataforma donde se produjo, sino que queda archivada en el sitio del que salió, que además es el único que controlo yo de verdad.

## Notificaciones

¿Y cómo me entero de las cosas? Las reacciones que ocurren en Mastodon o en Bluesky ya me llegan por sus propias apps; para eso no necesito montar nada. Pero, ¿y las que llegan como Webmention desde la web de otra persona, [como el reply que yo le hice a swyx](#comentar-en-la-web-de-otra-persona) pero al revés? Ahí no hay ninguna app que me avise: se guarda en webmentions.io, aparecerían bajo mi post y yo me enteraría solo cuando entrase a mirar.

> He de decir que aún no me ha llegado ninguna desde una web ajena... todas las que tengo vienen de Bridgy o de mí mismo 😅. Pero el día que llegue, debería enterarme 😜.

Por eso he configurado el sistema para que, por cada mención, reciba una notificación push al móvil y un email (que son mis mecanismos favoritos). Ambas salen de un webhook que webmention.io llama contra un pequeño servicio self-hosted ([ntfy](https://github.com/binwiederhier/ntfy)) que hace un push a la [app ntfy de Android](https://play.google.com/store/apps/details?id=io.heckel.ntfy&hl=en) de mi teléfono. Aquí puedes ver qué pinta tiene:

![A la izquierda, notificaciones push en el móvil con el título ’New Webmention’ y el autor de cada reacción. A la derecha, esas mismas menciones recibidas como email, con el origen y el destino de cada una](/img/blogs/second-steps-into-the-indieweb/ntfy-indieweb.png)

## Nada es infalible

Creo que también debo decirlo. Las Webmentions son más frágiles de lo que pensaba, y no por culpa de ninguna herramienta concreta: quien la recibe se descarga la página de origen y comprueba qué **enlaza exactamente** a la URL de destino. Si no coincide, no hay mención. Y "no coincide" incluye una barra final de más, un `http` donde iba `https`, un `www` que sobra o falta, un redirect por el medio o una ruta que ya no existe.

A mí me pasó respondiendo al artículo de swyx. Yo había enlazado a `https://swyx.io/learn-in-public`, que es una URL perfectamente válida: la abres en el navegador y el artículo está ahí. Pero la canónica, la que publica realmente su web, es `https://www.swyx.io/learn-in-public/` — con `www` y con barra final. Dos caracteres de diferencia y un redirect por el medio fueron suficientes para que la verificación no pasara y mi comentario no apareciese por ningún lado hasta que me di cuenta y copié la URL exactamente como aparece en la página original.

Y sigue pasando. Repasando lo publicado hasta hoy me encontré seis reacciones reales que no llegaron a mi web, todas por variantes de lo mismo: tres porque el post enlazaba a una página mía que ya no existe, dos porque respuestas en redes no enlazaban a ninguna página mía (aunque fueran parte de la conversación), y una que no se mostraba porque Bridgy solo recoge a partir del momento en que conectas la cuenta (aunque ofrece un mecanismo *Discover* para volver a checkear posts).

Un problema de esto es que no se vean en la web, pero lo que más me "preocupa" es que **no llegue a enterarme**: las notificaciones solo saltan cuando una mención llega bien. De estos fallos no avisa nadie.

Por otro lado webmention.io ha tenido 502 intermitentes este fin de semana, lo que me recordó que la mitad *receptora* de mi sistema depende del servidor de otra persona. Así que me pregunté si debería auto-alojar esa pieza. 

Tras darle un par de vueltas, no quiero tomar una decisión "a la ligera" y subestimar el trabajo que podría conllevar, de hacerlo posiblemente tendría que preocuparme del posible spam, el uptime y el mantenimiento de algo que hasta ahora parece que ha funcionado bastante bien, y gestionado por gente que sabe de esto muchísimo más que yo. Así que de momento he decidido hacer una visualización más "resistente", y seguir usando este receptor alojado.

## ¿Y cómo se sigue a alguien en la IndieWeb?

Publicar lo tengo casi completo (creo). Sobre seguir aún me queda mucho por aprender. 

Por lo que he leído/visto, para esto han creado [Microsub](https://indieweb.org/Microsub), y voy a explicar qué problema resuelve, porque a mí me costó un poco entenderlo 😅. 

Si nos paramos a pensar, los lectores de feeds normalmente tenemos unificados un cliente y servidor que en conjunto permiten hacer varias cosas: gestionar las fuentes (RSS, personas, ...), pero también recuperar y mostrar las novedades de cada fuente, te permite organizar las fuentes, te recuerda qué has visto, etc.

En el caso de Microsub la separación es más clara:
- **Un servidor** (como [Aperture](https://aperture.p3k.io/)) se pelea para recopilar todo tipo de información de las fuentes: feeds RSS/Atom, los Microformats publicados en la web personal de alguien, cuentas del [Fediverso](https://es.wikipedia.org/wiki/Fediverso) y lleva la cuenta de lo que ya has leído. 
- **Una app lectora** aparte (como [Monocle](https://monocle.p3k.io/) en web) se conecta a ese servidor y lo muestra todo como un único timeline. Anteriormente existió [IndiePass](https://indieweb.org/IndiePass) como aplicación móvil pero ya no está mantenida.

Una de las ventajas de este modelo es que puedes cambiar de app sin perder tus suscripciones ni lo que ya has leído, y otra es que tampoco hay ningún algoritmo de plataforma que decida por tí que es lo más relevante.

La desventaja clara parece la volatilidad de algunas herramientas del ecosistema 😅.

Otra pieza clave de este puzzle es [WebSub](https://indieweb.org/WebSub). Sin él, los clientes de lectura tienen que preguntar cada cierto tiempo "¿hay algo nuevo?", con la consabida cantidad de peticiones desperdiciadas y actualizaciones con retraso. 

Con WebSub, una web puede avisar a un hub en el momento en que publico, y el hub le informa a todo el que esté suscrito ([más info](https://indieweb.org/How_to_publish_and_consume_WebSub)). Con este modelo se puede "seguir a una web" y que sea tan inmediato como seguir una cuenta de una red social, interesante cuanto menos, ¿no?.

En mi caso ya tengo los feeds (tanto en RSS como microformats), pero aún no tengo ni el hub, ni el lector.

## Lo siguiente

> *¿Y qué vas a hacer después, Raúl?*

Me alegro que preguntes, porque no tengo ni pajolera idea 🤣🤣. Aún me estoy planteando qué me apetece explorar después. Opciones que estoy planteando:

- **[Microsub](https://indieweb.org/Microsub) y un lector**, para poder leer la web igual que publico en ella. Quizá con un hub [WebSub](https://indieweb.org/WebSub) encima de los feeds que ya tengo.
- **Una newsletter**, si es que hay alguien a quien le interese recibir lo que publico en mi web directamente en su correo. Un poco irónico en un post sobre descentralización... pero la gente lee donde lee 😅.
- **Un archivo personal**, que es la otra cara de POSSE: recuperar lo que llevo años publicando en otras plataformas (X, LinkedIn, productos de Google, ...) y luego hacer un *[backfill](https://indieweb.org/backfill)* (importar parte de ese contenido aquí). Además, sería potencialmente una vía de seguir alimentando (cada X tiempo) esta web con el contenido de esas plataformas a las que no hay forma de importar automáticamente el contenido.

¡Gracias por leer el artículo! Espero que te haya resultado interesante y servido para entender un poco mejor cómo funciona esto de la web.

Si quieres ayudarme, puedes darme tu opinión, por ejemplo: si tienes algún consejo, o has montado algo parecido y sabes dónde me la voy a pegar, te agradezco que me lo digas.

Y si tienes web propia, te animo a que me respondas **desde ella**: esta página declara su endpoint de Webmentions, así que tu respuesta aparecería aquí abajo. Serías la primera persona en mandarme una desde su propio sitio, y me haría bastante ilusión 😜. Si no, en [Mastodon](https://mastodon.social/@hhkaos) o [Bluesky](https://bsky.app/profile/rauljimenez.info) también te leo.

P.D: Me da la sensación de que publicar ha resultado ser "la mitad fácil", y que la otra mitad, va a ser donde estén los problemas/retos interesantes 😅.
