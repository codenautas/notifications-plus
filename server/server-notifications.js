"use strict";

var Path = require('path');
var backendPlus = require("backend-plus");
var MiniTools = require('mini-tools');

var changing = require('best-globals').changing;

class AppNotifications extends backendPlus.AppBackend{
    constructor(){
        super();
    }    
    addLoggedServices(){
        var be = this;
        super.addLoggedServices();
        this.app.get('/echo', function(req,res){
            res.end('echo');
        });
    }
    getProcedures(){
        var be = this;
        return super.getProcedures().then(function(procedures){
            return procedures.concat(
                require('./procedures-notifications.js').map(be.procedureDefCompleter, be)
            );
        });
    }
    getMenu(context){
        return {menu:[
            {menuType:'menu', name:'notificaciones', menuContent:[
                {menuType:'table', name:'notificaciones_pendientes', label:'pendientes'},
                // {menuType:'table', name:'notificaciones_enviadas', label:'enviadas'},
                {menuType:'table', name:'notificaciones', label:'Enviadas'},
            ]},
            {menuType:'menu', name:'configuración', menuContent:[
                {menuType:'table', name:'usuarios'},
            ]},
        ]}
    }
    getTables(){
        return super.getTables().concat([
            'usuarios',   
            'notificaciones',
            'notificaciones_pendientes',       
            'notificaciones_enviadas',
            'destinatarios'
        ]);
    }
}

new AppNotifications().start();