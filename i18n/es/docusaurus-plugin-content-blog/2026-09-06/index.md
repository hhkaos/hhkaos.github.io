---
slug: second-steps-into-the-indieweb
title: 🌿 Segundos pasos en la IndieWeb
description: Publicar en mi propio dominio ya es rutina, pero seguir al resto de la web desde él sigue siendo una casilla vacía.
authors: [hhkaos]
tags: [IndieWeb, Webmentions, POSSE, Micropub, Microsub, Web Personal]
---

Hace unos días escribí sobre mis [primeros pasos en la IndieWeb](/es/blog/first-steps-into-the-indieweb): datos semánticos, un hub de identidad, Webmentions enviadas a mano con `curl` y un servidor [Micropub](https://indieweb.org/Micropub) que acababa de empezar a funcionar.

Desde entonces he seguido tirando del hilo, y el panorama ha cambiado lo suficiente como para merecer un segundo post. La versión corta: **publicar está casi resuelto, seguir no**.

## Publicar mi propia actividad, de verdad

La parte de publicación ha pasado de teoría a rutina. Tengo un pequeño servidor [Indiekit](https://getindiekit.com/) privado, protegido con contraseña y sin enlazar desde ningún sitio, que hace de endpoint Micropub.

Cuando creo algo ahí, se guarda en un repositorio público de GitHub, [hhkaos/posts.rauljimenez.info](https://github.com/hhkaos/posts.rauljimenez.info), y una GitHub Action lo renderiza en [posts.rauljimenez.info](https://posts.rauljimenez.info/). Solo se renderiza, sindica o webmenciona lo que está marcado explícitamente como público. Mi web es la copia canónica; todo lo demás es una copia de ella.

Los tipos de post que realmente he publicado y puedo ver en vivo son: bookmarks, likes, replies, RSVPs, eventos, fotos y, más recientemente, reseñas y entradas de "leído" y "visto". Hay otros configurados pero todavía sin probar (reposts, artículos, "escuchado", check-ins), así que no voy a decir que funcionan. Los notes de prueba que usé al principio los borré una vez cumplida su función.

Dos clientes cubren casi todo: [Quill](https://quill.p3k.io/) para notes, bookmarks, likes, replies y RSVPs, y la propia interfaz de Indiekit para los tipos más ricos, como reseñas, lecturas, visionados y eventos. Ambos hablan con mi servidor a través de [IndieAuth](https://indieweb.org/IndieAuth), así que entro con mi propio dominio en vez de con otra cuenta más.

## POSSE a Mastodon y Bluesky

[POSSE](https://indieweb.org/POSSE) fue el concepto que me enganchó en el primer post, y ahora funciona de verdad. Si marco un post para sindicar, se publica en [Mastodon](https://mastodon.social/@hhkaos) y [Bluesky](https://bsky.app/profile/rauljimenez.info) unos minutos después, cuando el proceso programado lo recoge. No es instantáneo, y tampoco es automático para todo: es una decisión por post.

El texto se adapta al tipo de actividad ("🔖 He guardado…", "🎤 Voy a dar una charla en…"), se adjunta una imagen de previsualización, y las URLs resultantes se escriben de vuelta en el post original como enlaces `u-syndication`, para que la versión canónica sepa dónde viven sus copias. De esto se encarga Indiekit con unos wrappers de sindicador locales, no la función de publicación de Bridgy.

Dos limitaciones honestas. La primera: editar un post no actualiza las copias; la sindicación ocurre una vez y ya está. La segunda: LinkedIn, X e Instagram siguen sin una vía limpia — una API solo de pago en un caso, un proceso de aprobación de app OAuth más un sindicador de terceros poco mantenido en otro, y directamente ninguna API de publicación personal en el tercero. Así que esos siguen yendo a mano. No es imposible para siempre, simplemente hoy no compensa el esfuerzo.

## Conversaciones que vuelven

Las Webmentions salientes ya no son un `curl` que lanzo a mano, al menos para el contenido creado a través de Indiekit. Cuando uno de esos posts enlaza a algún sitio, el proceso de build descubre el endpoint del destino y le avisa, llevando un pequeño registro para no enviar nunca dos veces la misma mención. Los artículos normales del blog, como este, todavía no están cubiertos por esa automatización, así que para ellos vuelvo al envío manual — una decisión que aún tengo abierta.

Las Webmentions entrantes las recibe [webmention.io](https://webmention.io/), un servicio alojado, y ahora además se *muestran*: likes, reposts y respuestas aparecen bajo cada post en posts.rauljimenez.info, bajo los artículos de este blog, y en [links.rauljimenez.info](https://links.rauljimenez.info/). Los tres usan el mismo widget compartido que acabé extrayendo por el camino, [@hhkaos/webmentions-widget](https://www.npmjs.com/package/@hhkaos/webmentions-widget), que hace una foto de las menciones en tiempo de build en lugar de pedirlas en vivo desde el navegador.

Y [Bridgy](https://brid.gy/) cierra el círculo. Está conectado a Mastodon y Bluesky solo en modo backfeed — su parte de publicación está desactivada a propósito, porque de eso ya se encarga Indiekit. Así que cuando alguien da un like o responde a una de las copias sindicadas, esa reacción viaja de vuelta como Webmention a mi post original. La conversación que antes se quedaba atrapada en un silo acaba en mi propio dominio.

## Ahora me entero

Cada mención entrante verificada me llega además como notificación push y como email, con el tipo, el autor, el origen y el destino. Ambas salen de un webhook que webmention.io llama contra un pequeño servicio self-hosted, usando [ntfy](https://github.com/binwiederhier/ntfy) para la parte de push. Todavía no hay ningún filtro, porque el volumen es mínimo y, sinceramente, cada mención sigue pareciéndome un pequeño acontecimiento.

Lo que *no* tengo es aviso para los fallos aburridos: una sindicación atascada en la cola, un render roto, un build que en silencio no publicó nada. Esos los sigo descubriendo mirando.

## Chequeo de realidad

webmention.io tuvo 502 intermitentes este mes. La visualización los aguantó sin que yo me enterase, precisamente porque las menciones se hornean en tiempo de build en vez de pedirse en vivo — pero fue un buen recordatorio de que la mitad *receptora* de mi montaje depende del servidor de otra persona.

Estoy valorando si auto-alojar esa pieza. El intercambio es real: pasaría a asumir el anti-spam, el uptime y el mantenimiento de algo que hoy simplemente funciona, gestionado por gente que entiende el problema muchísimo mejor que yo. De momento, una visualización resistente más un receptor alojado me parece un sitio razonable donde estar.

## La otra mitad: seguir

Aquí está la parte que llevo posponiendo. Publicar está casi completo, y seguir es donde apenas he empezado — en realidad, no he hecho absolutamente nada.

La respuesta de la IndieWeb es [Microsub](https://indieweb.org/Microsub), y merece la pena explicar qué problema resuelve, porque a mí me costó un rato entenderlo. Un lector de feeds normalmente hace dos trabajos muy distintos a la vez: buscar y organizar las fuentes, y mostrártelas. Microsub los separa. Un servidor (como [Aperture](https://aperture.p3k.io/)) recopila las fuentes — feeds RSS/Atom, los Microformats publicados en la web personal de alguien, cuentas del Fediverso — y lleva la cuenta de lo que ya has leído. Una app lectora aparte (como [Monocle](https://monocle.p3k.io/) en web, o [Indigenous](https://indigenous.realize.be/) en móvil) se conecta a ese servidor y lo muestra todo como un único timeline. Puedes cambiar de app sin perder tus suscripciones ni lo que ya has leído, y no hay ningún algoritmo de plataforma decidiendo el orden.

Relacionado, y apuntando en la otra dirección: [WebSub](https://indieweb.org/WebSub). Hoy un feed obliga a los lectores a preguntar cada cierto tiempo "¿hay algo nuevo?", lo que significa o peticiones desperdiciadas o actualizaciones con retraso. Con WebSub, mi web avisa a un hub en el momento en que publico, y el hub se lo empuja a todo el que esté suscrito. Seguir una web se sentiría tan inmediato como seguir una cuenta.

Los feeds ya los tengo: este blog y posts.rauljimenez.info publican Atom/RSS con autodiscovery. Lo que no tengo es el hub, ni el lector. Eso es lo siguiente que toca romper.

## Lo siguiente

Un experimento con Microsub y un lector, para por fin leer la web igual que publico en ella. Quizá un hub WebSub encima de los feeds que ya existen. Decidir si este feed de actividad se ha ganado un enlace en la navegación de la web, o si se queda como un rincón tranquilo. Y puede que una suscripción por email sencilla para quien prefiera recibir las novedades en su bandeja de entrada antes que añadir otro feed más — algo que hoy no existe, y que resulta ligeramente irónico en un post sobre descentralización, pero la gente lee donde lee.

Publicar ha resultado ser la mitad fácil. Leer, por lo visto, es donde están los problemas interesantes.
