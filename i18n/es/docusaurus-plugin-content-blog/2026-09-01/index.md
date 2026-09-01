---
slug: first-steps-into-the-indieweb
title: 🌱 Primeros pasos en la IndieWeb
description: Cómo OpenTechEvents me llevó a profundizar en la IndieWeb, añadir datos semánticos a mi web y empezar a experimentar con Webmentions.
authors: [hhkaos]
tags: [IndieWeb, Webmentions, Web Semántica, OpenTechEvents, Web Personal]
enableComments: true
---

Durante las últimas semanas, mientras trabajaba en [OpenTechEvents](https://opentechevents.org/), acabé tirando de un hilo que hasta ahora solo había tocado por encima: la [IndieWeb](https://indieweb.org/).

Y, la verdad, tiene bastante sentido que haya llegado hasta ahí desde un proyecto sobre eventos tecnológicos abiertos.

## Una idea que no es nueva

Lo curioso es que la IndieWeb no es algo nuevo. El movimiento empezó alrededor de 2010, pero algunos de [sus principios](https://indieweb.org/principles) me parecen incluso más relevantes ahora que entonces.

OpenTechEvents me está haciendo volver a pensar en cómo publicamos información en la web, cómo conectamos comunidades y cómo hacemos que las cosas sean más descubribles sin depender de una única plataforma.

Algunas ideas de la IndieWeb me resuenan mucho: ser dueño de tu identidad, publicar en tu propio dominio, hacer el contenido más interoperable y permitir que las webs vuelvan a hablar entre ellas.

Todavía tengo mucho que aprender, pero ya he empezado a dar mis primeros pasos.

## Primeros pasos

He añadido más datos semánticos a esta web usando [JSON-LD](https://json-ld.org/) y [Microformats2](http://microformats.org/wiki/microformats2), por ejemplo, para que mi página principal [me describa un poco mejor como persona](https://validator.schema.org/?url=https%3A%2F%2Fwww.rauljimenez.info%2F#url=https%3A%2F%2Fwww.rauljimenez.info%2F), y para que una máquina pueda leerlo y entenderlo sin ambigüedades. También he actualizado mi [página de enlaces](https://links.rauljimenez.info/) para que funcione mejor como hub de identidad, con enlaces `rel="me"` y más compatibilidad con [IndieLogin](https://indielogin.com/) (mola mucho la idea).

## POSSE y ser dueño de lo que comparto

Un concepto que me resuena especialmente es [POSSE](https://indieweb.org/POSSE): publicar en tu propio sitio y después sindicar en otros lugares. En cierto modo, se parece a lo que ya hago con [Buffer](https://buffer.com/): publicar desde un sitio y distribuir a distintas plataformas. La diferencia importante es que, con POSSE, mi propia web pasa a ser la fuente de verdad, y el resto de plataformas son copias o canales de distribución. Entenderlo bien se vuelve bastante técnico bastante rápido, pero la idea me parece súper interesante: usar mi propio dominio como lugar canónico para mi contenido y mi actividad, y después distribuir copias a las plataformas donde ya está la mayoría de la gente.

Está claro que abandonar las plataformas sociales no es una opción hoy en día. Si quiero interactuar con la mayoría, sigo necesitando estar donde está la mayoría (y la mayoría de mi red no está en la IndieWeb), pero estoy buscando la forma de seguir usándolas e ir adoptando los conceptos de la IndieWeb, y unirme a este movimiento/comunidad sin que me genere mucha fricción.

En esencia, me gusta la idea de no quedarme completamente atado a plataformas que pueden cerrar, empezar a cobrar, restringir sus APIs o cambiar las reglas del juego. Ya he visto versiones de esa historia con Meetup.com, Twitter/X, LinkedIn, Flickr y otros servicios.

Y hay otra derivada que también me chirría: cuando escribo una reseña para ayudar a personas que buscan información geolocalizada en Google Maps, o subo la foto de un menú para que otras personas puedan decidir mejor, Google cierra esos datos detrás de una API de pago y yo no puedo indicar que quiero que mi aportación sea de uso libre y gratuito para cualquiera.

Ese ejemplo me viene mucho a la cabeza, pero aplica a muchas otras plataformas. Deberíamos ser los dueños de lo que compartimos, aunque sigamos participando en plataformas de terceros.

## Aaron Parecki como referencia

Si no has oído hablar nunca de [Aaron Parecki](https://aaronparecki.com/), es una de las personas detrás de IndieWebCamp. Y además es un geogeek: fue cofundador de [Geoloqi](https://geoloqi.com/esri-faq/), una plataforma de geolocalización adquirida por Esri, donde trabajó de 2012 a 2016 según su [experiencia en LinkedIn](https://www.linkedin.com/in/aaronparecki/details/experience/). Además de haber creado mucho contenido y herramientas alrededor de la IndieWeb, es alguien de quien he aprendido mucho sobre OAuth gracias a sus [cursos y materiales](https://www.udemy.com/user/aaron-parecki-2/), que cité en mi charla de Commit Conf 2023, [OAuth, OpenID Connect and JWT para dummies](https://youtu.be/I6ZYVsUuPU8?si=LC44P3NiscHMVQgq&t=217).

Si alguien quiere entender qué puede significar sumarse a la IndieWeb en la práctica, la web de Aaron es un ejemplo viviente de lo que significa ser dueño de tu propio contenido en tu propio dominio.

## Webmentions

Y ahora también he activado [Webmentions](https://webmention.io/).

Creo que la primera vez que vi una referencia a este concepto fue leyendo algún artículo de [swyx](https://swyx.io/), el de [aprender en público](https://swyx.io/learn-in-public). En aquel momento me sonó interesante, pero no terminé de bajar al barro para entender cómo funcionaba de verdad.

Probando todo esto me di cuenta también de que **recibir una Webmention** es solo una pequeña pieza de la IndieWeb. Si quiero que otras herramientas entiendan bien el contexto, mis artículos también tienen que incluir metadatos útiles. Así que empecé a marcar los posts con valores de Microformats2 como `h-entry`, `p-name`, `dt-published`, `p-author`, `u-url` y `e-content`, para que los servicios puedan extraer el título, el autor, la fecha, la URL canónica y el contenido real que menciona a otra página. Todavía tengo que extender esto de forma más consistente al resto de la web, incluyendo mi cerebro digital.

Eso significa que, al menos en teoría, si alguien escribe un artículo enlazando a uno de mis posts, esa mención puede descubrirse y mostrarse aquí. Parece poca cosa, pero me gusta la dirección: en vez de que las conversaciones queden encerradas solo dentro de redes sociales, una web personal puede recibir señales del resto de la web.

No pretendo decir que esto sea una migración completa a la IndieWeb. Es más bien abrir una puerta y poner un pie dentro.

## Cosas pendientes

También hay una pieza importante que todavía no he resuelto: automatizar el envío de Webmentions salientes. De momento, cuando enlazo a una web que soporta Webmentions, aún tengo que enviar la notificación manualmente, normalmente con un pequeño comando `curl`. No es lo ideal, pero para un primer experimento me vale.

Por ejemplo, este mismo artículo enlaza a mi landing de enlaces, [links.rauljimenez.info](https://links.rauljimenez.info/). Después de publicarlo, puedo enviar una Webmention manualmente así:

```bash
curl -i -X POST https://webmention.io/links.rauljimenez.info/webmention \
  -H "Content-Type: application/x-www-form-urlencoded" \
  --data-urlencode "source=https://www.rauljimenez.info/es/blog/first-steps-into-the-indieweb" \
  --data-urlencode "target=https://links.rauljimenez.info/"
```

Y con eso ya aparece una mención en el footer de [links.rauljimenez.info](https://links.rauljimenez.info/). Ahora mismo parece algo tedioso, pero entiendo que con otras herramientas, como [Micropub](https://indieweb.org/Micropub), este tipo de flujo puede volverse bastante menos manual.

También quiero sacar tiempo para probar otras piezas del ecosistema IndieWeb, como [Micropub](https://indieweb.org/Micropub) y [Microsub](https://indieweb.org/Microsub).

Y, relacionado pero distinto, también quiero entender por fin bien el [Fediverso](https://es.wikipedia.org/wiki/Fediverso). La IndieWeb y el Fediverso no son lo mismo, aunque ambos forman parte de un movimiento más amplio a favor de una internet descentralizada y del control de los datos por parte de los usuarios. Los veo como ecosistemas hermanos, con filosofías muy parecidas, pero tecnologías y enfoques diferentes. Nunca llegué a profundizar demasiado en el Fediverso, pero esto ha vuelto a despertarme la curiosidad, y me gusta lo que ambos representan.

## Hacia un gemelo digital

[Desde 2023](../2023-04-18/index.md) he tratado esta web como mi cerebro digital. Quizá, poco a poco, también pueda convertirse en una especie de gemelo digital de mi presencia online: una representación más fiel de lo que publico, cuando hago una reseña, marco algo como favorito, guardo, confirmo mi asistencia a un evento y comparto por la web.

A ver hasta dónde me lleva este camino 😅.

## Actualización: Micropub ya funciona

Bueno, esto ha avanzado más rápido de lo que esperaba. Desde que escribí este post, ya he montado Micropub de verdad, con un servidor [Indiekit](https://getindiekit.com/) privado, ayudado bastante por la IA durante el proceso. En este nuevo flujo, publicar ya no depende de comandos `curl` manuales, aunque esta integración todavía no está conectada con Docusaurus.

El flujo ahora guarda notes, bookmarks, likes y replies en un repositorio público de GitHub, [hhkaos/posts.rauljimenez.info](https://github.com/hhkaos/posts.rauljimenez.info). Desde ahí, una GitHub Action renderiza el feed público en [posts.rauljimenez.info](https://posts.rauljimenez.info/), mostrando solo los elementos marcados como visibles.

De momento estoy usando un modelo de privacidad sencillo por tipo de contenido: las notes y replies son públicas por defecto, mientras que los bookmarks y likes son privados por defecto. Puede que esto evolucione, pero me parece un buen punto de partida.

Y esto ya no es solo teórico: ya he enviado una Webmention saliente real al post de swyx sobre [aprender en público](https://swyx.io/learn-in-public), como reply. Fue verificada por webmention.io y ya aparece allí, lo cual ha sido una primera prueba end-to-end bastante satisfactoria.

Siguen quedando varias piezas pendientes: recibir Webmentions correctamente, experimentar con Microsub y decidir si este nuevo feed público debería aparecer en la navegación principal de esta web. Pero los cimientos son ahora bastante más reales que cuando empecé a escribir este post.
