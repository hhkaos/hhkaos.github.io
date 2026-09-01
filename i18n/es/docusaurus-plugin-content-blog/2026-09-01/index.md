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

Lo curioso es que la IndieWeb no es algo nuevo. El movimiento empezó alrededor de 2010, pero algunas de sus ideas me parecen incluso más relevantes ahora que entonces.

OpenTechEvents me está haciendo volver a pensar en cómo publicamos información en la web, cómo conectamos comunidades y cómo hacemos que las cosas sean más descubribles sin depender demasiado de una única plataforma. Cuanto más leía, más me encontraba asintiendo con algunas ideas de la IndieWeb: ser dueño de tu identidad, publicar en tu propio dominio, hacer el contenido más interoperable y permitir que las webs vuelvan a hablar entre ellas.

Todavía tengo mucho que aprender, pero ya he dado algunos primeros pasos.

He añadido más datos semánticos a esta web usando [JSON-LD](https://json-ld.org/) y [Microformats2](http://microformats.org/wiki/microformats2), para que mi página principal me describa un poco mejor como persona, y no solo como una colección de elementos HTML. También he actualizado mi [página de enlaces](https://links.rauljimenez.info/) para que funcione mejor como hub de identidad, con enlaces `rel="me"` y más compatibilidad con [IndieLogin](https://indielogin.com/).

Un concepto que me resuena especialmente es [POSSE](https://indieweb.org/POSSE): publicar en tu propio sitio y después sindicar en otros lugares. En cierto modo, se parece a lo que ya hago con [Buffer](https://buffer.com/): publicar desde un sitio y distribuir a distintas plataformas. La diferencia importante es que, con POSSE, mi propia web pasa a ser la fuente de verdad, y el resto de plataformas son copias o canales de distribución. Entenderlo bien se vuelve bastante técnico bastante rápido, pero la idea me atrae muchísimo: usar mi propio dominio como lugar canónico para mi contenido y mi actividad, y después distribuir copias a las plataformas donde ya está la mayoría de la gente.

Eso no significa abandonar del todo las plataformas sociales. Si quiero interactuar con la mayoría, sigo necesitando estar donde está la mayoría. Pero sí me gusta la idea de no quedarme completamente atado a plataformas que pueden cerrar, empezar a cobrar, restringir sus APIs o cambiar las reglas del juego. Ya he visto versiones de esa historia con Meetup.com, Twitter/X, LinkedIn y otros servicios. Deberíamos ser los dueños de lo que compartimos, aunque sigamos participando en plataformas de terceros.

Si no has oído hablar nunca de [Aaron Parecki](https://aaronparecki.com/), es una de las personas detrás de IndieWebCamp. Y además es un geogeek: fue cofundador de [Geoloqi](https://geoloqi.com/esri-faq/), una plataforma de geolocalización adquirida por Esri, donde trabajó de 2012 a 2016 según su [experiencia en LinkedIn](https://www.linkedin.com/in/aaronparecki/details/experience/). Además de haber creado mucho contenido y herramientas alrededor de la IndieWeb, es alguien de quien he aprendido mucho sobre OAuth gracias a sus [cursos y materiales](https://www.udemy.com/user/aaron-parecki-2/), que cité en mi charla de Commit Conf 2023, [OAuth, OpenID Connect and JWT para dummies](https://youtu.be/I6ZYVsUuPU8?si=LC44P3NiscHMVQgq&t=217).

Si alguien quiere entender qué puede significar sumarse a la IndieWeb en la práctica, la web de Aaron es un ejemplo viviente de lo que significa ser dueño de tu propio contenido en tu propio dominio.

Y ahora también he activado [Webmentions](https://webmention.io/).

Probando todo esto me di cuenta también de que recibir una Webmention es solo la mitad de la historia. Si quiero que otras herramientas entiendan bien el contexto, mis artículos también tienen que exponer metadatos útiles. Así que empecé a marcar los posts con valores de Microformats2 como `h-entry`, `p-name`, `dt-published`, `p-author`, `u-url` y `e-content`, para que los servicios puedan extraer el título, el autor, la fecha, la URL canónica y el contenido real que menciona a otra página. Todavía tengo que extender esto de forma más consistente al resto de la web, incluyendo mi cerebro digital.

Eso significa que, al menos en teoría, si alguien escribe un artículo enlazando a uno de mis posts, esa mención puede descubrirse y mostrarse aquí. Parece poca cosa, pero me gusta la dirección: en vez de que las conversaciones queden encerradas solo dentro de redes sociales, una web personal puede recibir señales del resto de la web.

No pretendo decir que esto sea una migración completa a la IndieWeb. Es más bien abrir una puerta y poner un pie dentro.

También hay una pieza importante que todavía no he resuelto: automatizar el envío de Webmentions salientes. De momento, cuando enlazo a una web que soporta Webmentions, aún tengo que enviar la notificación manualmente, normalmente con un pequeño comando `curl`. No es lo ideal, pero para un primer experimento me vale.

También quiero sacar tiempo para probar otras piezas del ecosistema IndieWeb, como [Micropub](https://indieweb.org/Micropub) y [Microsub](https://indieweb.org/Microsub).

Y, relacionado pero distinto, también quiero entender por fin bien el [Fediverso](https://es.wikipedia.org/wiki/Fediverso). La IndieWeb y el Fediverso no son lo mismo, aunque ambos forman parte de un movimiento más amplio a favor de una internet descentralizada y del control de los datos por parte de los usuarios. Los veo como ecosistemas hermanos, con filosofías muy parecidas, pero tecnologías y enfoques diferentes. Nunca llegué a profundizar demasiado en el Fediverso, pero esto ha vuelto a despertarme la curiosidad.

Pero me gusta lo que representa.

[Desde 2023](../2023-04-18/index.md) he tratado esta web como mi cerebro digital. Quizá, poco a poco, también pueda convertirse en una especie de gemelo digital de mi presencia online: una representación más fiel de lo que publico, marco como favorito, guardo, confirmo como asistencia y comparto por la web.

A ver hasta dónde me lleva este camino 😅.
