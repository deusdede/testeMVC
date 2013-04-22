var dados=[
        {name: 'Ed',    email: 'ed@sencha.com'},
        {name: 'Larry', email: 'larry@sencha.com'},
        {name: 'John', email: 'john@sencha.com'}
    ];
	
Ext.define('MVC.store.Users', {
    extend: 'Ext.data.Store',
    model: 'MVC.model.User', 
	data:  dados
});