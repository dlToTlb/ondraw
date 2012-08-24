Ext.define('TEST.view.SettingList',{
	extend:'Ext.Panel',
	xtype:'SettingList',
	
	config:{
		Title:'SettingList',
		iconCls:'star',
		scrollable:false,
		
		items: [
                {
                	xtype: 'button',
                   text: '개발자 도와주기',
                   id: 'btnList1',
                   ui: 'plain', 
                   
                 },
                 {
                 	xtype: 'button',
                    text: '정보 ',
                    id: 'btnList2',
                    ui: 'plain', 
                    
                  },
                  {
                  	xtype: 'button',
                     text: '공지사항 ',
                     id: 'btnList3',
                     ui: 'plain', 
                     
                   },
                   
                ]
		
		
		
	}
	
});