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

He añadido más datos semánticos a esta web usando JSON-LD y Microformats2, para que mi página principal me describa un poco mejor como persona, y no solo como una colección de elementos HTML. También he actualizado mi [página de enlaces](https://links.rauljimenez.info/) para que funcione mejor como hub de identidad, con enlaces `rel="me"` y más compatibilidad con IndieLogin.

Un concepto que me resuena especialmente es [POSSE](https://indieweb.org/POSSE): publicar en tu propio sitio y después sindicar en otros lugares. Entenderlo bien se vuelve bastante técnico bastante rápido, pero la idea me atrae muchísimo: usar mi propio dominio como lugar canónico para mi contenido y mi actividad, y después distribuir copias a las plataformas donde ya está la mayoría de la gente.

Eso no significa abandonar del todo las plataformas sociales. Si quiero interactuar con la mayoría, sigo necesitando estar donde está la mayoría. Pero sí me gusta la idea de no quedarme completamente atado a plataformas que pueden cerrar, empezar a cobrar, restringir sus APIs o cambiar las reglas del juego. Ya he visto versiones de esa historia con Meetup.com, Twitter/X, LinkedIn y otros servicios. Deberíamos ser los dueños de lo que compartimos, aunque sigamos participando en plataformas de terceros.

Mientras leía más sobre todo esto, además, me volvía a encontrar una y otra vez con [Aaron Parecki](https://aaronparecki.com/), una de las personas detrás de IndieWebCamp y alguien a quien admiro desde hace tiempo. Hay una conexión personal curiosa: fue cofundador de [Geoloqi](https://geoloqi.com/esri-faq/), una plataforma de geolocalización que acabó siendo adquirida por Esri, donde trabajo actualmente. Según su [experiencia en LinkedIn](https://www.linkedin.com/in/aaronparecki/details/experience/), también trabajó en Esri entre 2012 y 2016. Y más allá del punto geo, he aprendido mucho sobre OAuth gracias a sus [cursos y materiales](https://www.udemy.com/user/aaron-parecki-2/), que de hecho cité en mi charla de Commit Conf 2023, [OAuth, OpenID Connect and JWT para dummies](https://youtu.be/I6ZYVsUuPU8?si=LC44P3NiscHMVQgq&t=217).

Si alguien quiere entender qué puede significar sumarse a la IndieWeb en la práctica, la web de Aaron es un ejemplo viviente de lo que significa ser dueño de tu propio contenido en tu propio dominio.

Y ahora también he activado [Webmentions](https://webmention.io/).

Probando todo esto me di cuenta también de que recibir una Webmention es solo la mitad de la historia. Si quiero que otras herramientas entiendan bien el contexto, mis artículos también tienen que exponer metadatos útiles. Así que empecé a marcar los posts con valores de Microformats2 como `h-entry`, `p-name`, `dt-published`, `p-author`, `u-url` y `e-content`, para que los servicios puedan extraer el título, el autor, la fecha, la URL canónica y el contenido real que menciona a otra página. Todavía tengo que extender esto de forma más consistente al resto de la web, incluyendo mi cerebro digital.

Eso significa que, al menos en teoría, si alguien escribe un artículo enlazando a uno de mis posts, esa mención puede descubrirse y mostrarse aquí. Parece poca cosa, pero me gusta la dirección: en vez de que las conversaciones queden encerradas solo dentro de redes sociales, una web personal puede recibir señales del resto de la web.

No pretendo decir que esto sea una migración completa a la IndieWeb. Es más bien abrir una puerta y poner un pie dentro.

También hay una pieza importante que todavía no he resuelto: automatizar el envío de Webmentions salientes. De momento, cuando enlazo a una web que soporta Webmentions, aún tengo que enviar la notificación manualmente, normalmente con un pequeño comando `curl`. No es lo ideal, pero para un primer experimento me vale.

También quiero sacar tiempo para probar otras piezas del ecosistema, como [Micropub](https://indieweb.org/Micropub), [Microsub](https://indieweb.org/Microsub), y quizá entender por fin bien el [Fediverse](https://indieweb.org/Fediverse). Nunca llegué a profundizar demasiado en ello, pero esto ha vuelto a despertarme la curiosidad.

Pero me gusta lo que representa.

Durante años he tratado esta web como mi cerebro digital. Quizá ahora también pueda estar un poco más conectado.

A ver hasta dónde me lleva este camino 😅.
