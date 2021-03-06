Ext.define('TEST.view.Notice',{
	extend:'Ext.Panel',
	xtype:'Notice',
	
	config:{
		Title:'Notice',
		iconCls:'',
		scrollable:false,
		
		items: [
			    {
					 xtype: 'titlebar',
				     docked: 'top',
				     title: '공지사',
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
                 	xtype:"spacer",
                 	height:'20px',
                },  
                {
                	 xtype: 'button',
                     text: '어플출시 안내 ',
                     id: 'btnNoti1',
                     ui: 'plain', 
                   
                 },
                 {
			    	 xtype:'panel',
			    	 html:'<p>안녕하세요.  반갑습니다.</p>'+
			    		  '<p>많은 홍보 부탁 드립니다.</p>',
			    	style:'font-size:0.7em;color:#999;padding:15px;font-weight:bold;background-color:#fff;margin:0 10px;border-radius: 10px;border-top:1px solid #ddd;',
		         },
                 {
                 	 xtype: 'button',
                     text: '제작일자  : 2012.9.14 ',
                     id: 'btnNoti2',
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