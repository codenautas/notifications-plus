"use strict";

module.exports = function(context){
    var admin=context.user.rol==='admin';
    return context.be.tableDefAdapt({
        name:'notificaciones_enviadas',
        elementName:'notificación',
        editable:admin,
        fields:[
            {name:'notificacion'          , typeName:'text'     ,title:'notificación' ,nullable:false},
            {name:'fecha'                 , typeName:'date'     ,nullable:false, isName:true},
            {name:'titulo'                , typeName:'text'     ,nullable:false,   title:'título', isName:true},
            {name:'detalles'              , typeName:'text'     ,nullable:false,   title:'título'},
        ],
        primaryKey:['notificacion'],
        detailTables:[
            {table: 'destinatarios'     , fields:['notificacion'], abr:'D'},
        ],
        sql:{
            from:`(select n.* from notificaciones n inner join destinatarios using(notificacion)  where usuario = `+context.be.db.quoteText(context.user.usuario)+')'
        }
    },context);
}