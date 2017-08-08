"use strict";

module.exports = function(context){
    var admin=context.user.rol==='admin';
    return context.be.tableDefAdapt({
        name:'notificaciones',
        elementName:'notificación',
        editable:admin,
        fields:[
            {name:'notificacion'          , typeName:'text'     ,title:'notificación' ,nullable:false},
            {name:'fecha'                 , typeName:'date'     ,nullable:false, isName:true},
            {name:'titulo'                , typeName:'text'     ,nullable:false,   title:'título', isName:true},
            {name:'detalles'              , typeName:'text'     ,    title:'título'},
        ],
        primaryKey:['notificacion'],
        detailTables:[
            {table: 'destinatarios'     , fields:['notificacion'], abr:'D'},
        ]
    },context);
}