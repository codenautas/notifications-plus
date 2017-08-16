<!--multilang v0 es:LEEME.md en:README.md -->
# notifications-plus
<!--lang:es-->
Notifications with backend-plus
<!--lang:en--]
Notifications with backend-plus

[!--lang:*-->

<!-- cucardas -->
![designing](https://img.shields.io/badge/stability-designing-red.svg)
[![npm-version](https://img.shields.io/npm/v/notifications-plus.svg)](https://npmjs.org/package/notifications-plus)
[![downloads](https://img.shields.io/npm/dm/notifications-plus.svg)](https://npmjs.org/package/notifications-plus)
[![build](https://img.shields.io/travis/codenautas/notifications-plus/master.svg)](https://travis-ci.org/codenautas/notifications-plus)
[![coverage](https://img.shields.io/coveralls/codenautas/notifications-plus/master.svg)](https://coveralls.io/r/codenautas/notifications-plus)
[![climate](https://img.shields.io/codeclimate/github/codenautas/notifications-plus.svg)](https://codeclimate.com/github/codenautas/notifications-plus)
[![dependencies](https://img.shields.io/david/codenautas/notifications-plus.svg)](https://david-dm.org/codenautas/notifications-plus)
[![qa-control](http://codenautas.com/github/codenautas/notifications-plus.svg)](http://codenautas.com/github/codenautas/notifications-plus)


<!--multilang buttons-->

idioma: ![castellano](https://raw.githubusercontent.com/codenautas/multilang/master/img/lang-es.png)
también disponible en:
[![inglés](https://raw.githubusercontent.com/codenautas/multilang/master/img/lang-en.png)](README.md)

<!--lang:es-->
# Objetivo

<!--lang:en--]
# Main Goal

<!--lang:es-->
Disponer de una aplicación de ejemplo para [backend-plus](https://github.com/codenautas/backend-plus). 

<!--lang:en--]
To be an example app for  [backend-plus](https://github.com/codenautas/backend-plus).

<!--lang:es-->
## Descripción funcional

<!--lang:en--]
## Functional description

<!--lang:es-->
Es un sistema de notificaciones entre usuarios.

   1. Objetivo principal
      1. Todos los usuarios pueden crear notificaciones de texto y elegir uno o más usuarios destinatarios
      2. Los destinatarios tienen un botón para "notificarse"
      3. Los remitentes de las notificaciones pueden saber cuándo los destinatarios se han notificado
   2. Pantallas principales
      1. Crear notirficación: 
         Pantalla completa para cargar una notificación nueva y elegir los destinatarios
      1. Notificaciones pendientes: 
         notificaciones que he recibido y no me he notificado 
         (deben mostrarse en dos colores distintos las notificaciones que ya se hayan mostrado antes de las nuevas).
         **Botón notificado**: para marcar que me notifiqué. 
      2. Notificaciones enviadas: notificaciones que he enviado con 3 columnas adicionales:
         1. Cantidad de destinatarios
         2. Cantidad de pendientes
         3. Cantidad de notificados

<!--lang:en--]
It is a notification system between users. (see Spanish for details)

<!--lang:es-->
# Instalación
Bajar la aplicación del repositorio, configurar el servidor y crear la base de datos

<!--lang:en--]
# Install
Download the app, config the server and create the database

[!--lang:*-->
```sh
$ git clone https://github.com/codenautas/notifications-plus.git
$ cd notifications-plus
$ cp example-local-config.yaml local-config.yaml
$ npm install
$ npm start -- --dump-db
$ sudo -u postgres psql < local-db-dump-create-db.sql
$ sudo -u postgres psql < local-db-dump.sql
```

<!--lang:es-->
## Ininicar el servicio back-end
<!--lang:en--]
## Start service
[!--lang:*-->
```sh
$ npm start
```

<!--lang:es-->
## Licencia
<!--lang:en--]
## License
[!--lang:*-->

[MIT](LICENSE)

