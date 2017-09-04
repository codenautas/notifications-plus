"use strict";

module.exports = function(context){
    var admin=context.user.rol==='admin';
    return context.be.tableDefAdapt({
        name:'notificaciones',
        elementName:'notificación',
        editable:admin,
        fields:[
            {name:'notificacion'          , typeName:'text'     ,title:'notificación' , nullable:false, sequence: {name:'notif'}},
            {name:'fecha'                 , typeName:'date'     ,nullable:false, isName:true},
            {name:'titulo'                , typeName:'text'     ,nullable:false,   title:'título', isName:true},
            {name:'detalles'              , typeName:'text'     ,title:'detalles'},
            {name:'enviada'               , typeName:'timestamp',editable:false},
            {name:'remitente'             , typeName:'text'     ,editable:false},
            {name:'enviar'                , typeName:'text'     ,editable:false, clientSide:'enviarNotificacion'},
        ],
        primaryKey:['notificacion'],
        foreignKey:[
            {table: 'usuarios'     , fields:[{source:'remitente', target:'usuario'}], abr:'D'},
        ],
        detailTables:[
            {table: 'destinatarios'     , fields:['notificacion'], abr:'D'},
        ],
        sql:{
            from:`(select n.* from notificaciones n where remitente = `+context.be.db.quoteText(context.user.usuario)+')'
        }
    },context);
}