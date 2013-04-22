Ext.define('MVC.controller.Users', {
    extend: 'Ext.app.Controller',

    views: [
        'user.List',
		'user.Edit'		
    ],
	
	refs: [{
           ref: 'listGrid',
           selector: 'grid'
    }],

	   init: function() {
        this.control({
            'userlist': {
               itemdblclick: this.editUser,
            },
			'userlist button[action=insert]': {
               click: this.selecionados
           },			
        });
    },

	editUser: function(grid, record) {
        console.log('clique duplo no ' + record.get('name'));
        var view = Ext.widget('useredit');

        view.down('form').loadRecord(record);
    },
	
	selecionados: function() {
        console.log('clique no selecionados');
		//var records = this.getListGrid().getSelectionModel().getSelection();
		//var json = Ext.JSON.encode(this.getListGrid().getSelectionModel().getSelection().map(function(e){ return e.data; }));
		//console.log(json);
		this.getListGrid().getSelectionModel().getSelection().forEach(function(record){
			console.log(record.data.name);
			//chamar a url com os dados
			Ext.Ajax.request({
			url: '/app_dev.php/sicdoc/dispatches/' + record.data.name,
			method: 'put'
			});			
		});
    }	
	
});