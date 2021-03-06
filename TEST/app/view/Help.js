Ext.define('TEST.view.Help',{
	extend:'Ext.Panel',
	xtype:'Help',
	
	config:{
		Title:'Help',
		iconCls:'개발자도와주',
		scrollable:false,
		
		items: [
			    {
					 xtype: 'titlebar',
				     docked: 'top',
				     title: '개발자 도와주기',
				     items:[
							{
								 xtype:'button',
								 text:'뒤로',
								 ui:'back',
								 align:'left',
								 
							},  
							
				            ]
				},
				{
			    	 xtype:'panel',
			    	 html:'<p>이 앱의 서비스가 도움이 되셨다면, </p>'+
			    		  '<p>더 좋은 서비스 개선을 위해 작은 도움을 주세요</p>',
			    	 style:'font-size:0.7em;color:#999;padding:15px 15px 5px 15px;font-weight:bold;',
		        },   
                {
                	 xtype: 'button',
                     text: '개발자 도와주기 1 (US $0.99)',
                     id: 'btnHelp1',
                     ui: 'plain', 
                   
                 },
                 {
                 	 xtype: 'button',
                     text: '개발자 도와주기 5 (US $4.99)',
                     id: 'btnHelp2',
                     ui: 'plain', 
                    
                  },
                  {
                  	 xtype: 'button',
                     text: '개발자 도와주기 10 (US $9.99) ',
                     id: 'btnHelp3',
                     ui: 'plain', 
                     
                   },
                   {
  			    	 xtype:'panel',
  			    	 docked: 'bottom',
  			    	 html:'<p>© Hy-olleh</p> ',
  			    	 
  			    	 style:'font-size:0.6em;color:#999;padding:15px;text-align:center;',
  		           }
                   
                ]
		
		
		
	}
	
});