"use strict";

var changing = require('best-globals').changing;
var fs = require('fs-promise');
var Path = require('path');

var ProceduresNotificaciones = {};

ProceduresNotificaciones = [
    {
        action:'enviar/notificacion',
        parameters:[
            {name:'notificacion'},
        ],
        coreFunction:function(context, parameters){
            return context.client.query(
                `UPDATE notificaciones 
                   SET enviada = current_timestamp, remitente = $2 
                   WHERE notificacion = $1 AND enviada IS NULL 
                   RETURNING enviada`,
                [parameters.notificacion, context.username]
            ).fetchUniqueRow().then(function(result){
                return result.row;
            });
        }
    },
    {
        action:'notify',
        parameters:[
            {name:'notificacion'},
        ],
        coreFunction:function(context, parameters){
            return context.client.query(
                `UPDATE destinatarios 
                   SET notified_date = current_timestamp
                   WHERE notificacion = $1 AND usuario = $2
                   RETURNING notified_date`,
                [parameters.notificacion, context.username]
            ).fetchUniqueRow().then(function(result){
                return result.row;
            });
        }
    },
    {
        action:'viewed',
        parameters:[
            {name:'notificacion'},
        ],
        coreFunction:function(context, parameters){
            return context.client.query(
                `UPDATE destinatarios 
                   SET viewed_date = current_timestamp
                   WHERE notificacion = $1 AND usuario = $2
                   RETURNING viewed_date`,
                [parameters.notificacion, context.username]
            ).fetchUniqueRow().then(function(result){
                return result.row;
            });
        }
    },
];

module.exports = ProceduresNotificaciones;