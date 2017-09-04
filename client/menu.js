"use string";

// var html=require('js-to-html').html;
var html = jsToHtml.html;

var bestGlobals = require('best-globals');
var changing = bestGlobals.changing;

var my = myOwn;

// window.addEventListener('load', function(){
//     my.autoSetup().then(prepareTableButtons);
//     document.getElementById('menu-derecha').addEventListener('click', menuDerecha);
// });
// 

my.clientSides.enviarNotificacion = {
    update: false,
    prepare: function (depot, fieldName) {
        if (!depot.row.enviada) {
            var boton = html.button('Enviar').create();
            depot.rowControls[fieldName].appendChild(boton);
        }
        depot.rowControls[fieldName].onclick = function () {
            if (!depot.row.enviada) {
                my.ajax.enviar.notificacion({
                    notificacion: depot.row.notificacion
                }).then(function (result) {
                    depot.rowControls[fieldName].setTypedValue('ok');
                });
            }
        }
    }
};


//Destinatarios table
my.clientSides.markAsNotified = {
    update: false,
    prepare: function (depot, fieldName) {
        if (depot.row.notified_date) {
            depot.rowControls[fieldName].setTypedValue('Notificado');
        } else if (depot.row.usuario == my.config.username) {
            var boton = html.button('Notificar').create();
            depot.rowControls[fieldName].appendChild(boton);
        }
        depot.rowControls[fieldName].onclick = function () {
            if (!depot.row.notified_date) {
                my.ajax.notify({
                    notificacion: depot.row.notificacion
                }).then(function (result) {
                    depot.rowControls[fieldName].setTypedValue('Notificado');
                });
            }
        }
    }
}

my.clientSides.checkViewed = {
    update: false,
    prepare: function (depot, fieldName) {
        if (depot.row.usuario == my.config.username) {
            if (depot.row.viewed_date) {
                depot.rowControls[fieldName].setTypedValue(true);
            } else {
                my.ajax.viewed({
                    notificacion: depot.row.notificacion
                }).then(function (result) {
                    depot.rowControls[fieldName].setTypedValue(true);
                });
            }
        } else{
            depot.rowControls[fieldName].setTypedValue(null);
            depot.rowControls['viewed_date'].setTypedValue(null);
        }
    }
}