"use strict";

module.exports = function(context){
    var admin=context.user.rol==='admin';
    return context.be.tableDefAdapt({
        name:'destinatarios',
        elementName:'destinatario',
        editable:admin,
        fields:[
            {name:'notificacion'          , typeName:'text'     ,title:'notificación' ,nullable:false},
            {name:'usuario'               , typeName:'text'     ,nullable:false},
        ],
        primaryKey:['notificacion', 'usuario'],
        foreignKeys:[
            {references: 'usuarios'     , fields:['usuario']},
            {references: 'notificaciones'     , fields:['notificacion']},
        ]
    },context);
}