"use strict";

var changing = require('best-globals').changing;
var fs = require('fs-promise');
var Path = require('path');

var ProceduresNotificaciones = {};

ProceduresNotificaciones = [
    {
        action:'rechazar-todo',
        parameters:[
            {name:'atomic_number'},
        ],
        coreFunction:function(context, parameters){
            return context.client.query(
                "SELECT url FROM element_images WHERE atomic_number=$1 ORDER BY kind",
                [parameters.atomic_number]
            ).fetchAll().then(function(result){
                return result.rows;
            });
        }
    },
];

module.exports = ProceduresNotificaciones;