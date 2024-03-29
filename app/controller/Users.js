Ext.define('MVC.controller.Users', {
    extend: 'Ext.app.Controller',

    views: [
        'user.List',
		'user.Edit'		
    ],
    models: ['User'],
    stores: ['Users'],
	
    init: function() {
        this.control({
            'userlist': {
                itemdblclick: this.editUser
            },
			'useredit button[action=save]': {
				click: this.updateUser
			}	
        });
    },

	editUser: function(grid, record) {
        console.log('clique duplo no ' + record.get('name'));
        var view = Ext.widget('useredit');

        view.down('form').loadRecord(record);
    },
	
	updateUser: function(button) {
		var win    = button.up('window'),
			form   = win.down('form'),
			record = form.getRecord(),
			values = form.getValues();

		record.set(values);
		win.close();
	}	
});