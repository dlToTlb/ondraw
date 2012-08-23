/*
 * File: app/controller/Main.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            mainView: '#MainView',
            makeRoom: '#MakeRoom',
            connect: '#Connect',
            main: '#Main'
        },

        control: {
            "[action=Room]": {
                tap: 'onButtonTapMakeRoom'
            },
            "[action=connection]": {
                tap: 'onButtonTapConnect'
            }
        }
    },
    
    launch : function() {
    	server.on('validateRoom', function(data) {
    		if(!data.isRoom) {
//    			this.getMain().animateActiveItem(1, {type: 'reveal', direction: 'up'});
    			Ext.getCmp('RoomNum').setText(data.roomNum);
    			Ext.getCmp('Main').animateActiveItem(1, {type: 'reveal', direction: 'up'});
    		} else {
    			roomNumber = Math.floor(Math.random()*999999);
    			server.emit('join', { num : roomNumber, opts : 'created' });
    		}
    	});
    },
    
    onButtonTapMakeRoom: function(button, e, options) {
        var roomNumber = Math.floor(Math.random()*999999);
        
        server.emit('join', { num : roomNumber, opts : 'created' });
    },

    onButtonTapConnect: function(button, e, options) {
        Ext.Msg.show({
            title   : '방번호를 입력하세요',
            msg     : null,
            buttons : [{
                itemId : 'ok',
                text   : '참여하기',
                ui     : 'action'
            },{
                itemId : 'cancle',
                text   : '취소'
            }],
            prompt  : { maxLength : 6, autocapitalize : false },
            fn      : function(text,val) {
                // do some stuff
                if(text == 'ok') {
                	server.emit('join', { num : val, opts : 'joined' });
                } else {

                }
            }
        });
    }

});