Ext.define('MVC.view.user.List' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.userlist',

	tbar: [
		{
           text: 'Incluir',
           action: 'insert',
           iconCls: 'icon-add',
           itemId: 'insert'
		}
	],

    title: 'All Users',

	multiSelect: true,
	
	height: 300,
	width: 300,
	
    initComponent: function() {
        this.store = {
            fields: ['name', 'email'],
            data  : [
                {name: 'Ed',    email: 'ed@sencha.com'},
                {name: 'Deusdede',    email: 'deusdede@sencha.com'},
                {name: 'Thiago',    email: 'thiago@sencha.com'},
                {name: 'Tommy', email: 'tommy@sencha.com'}
            ]
        };

        this.columns = [
            {header: 'Name',  dataIndex: 'name',  flex: 1},
            {header: 'Email', dataIndex: 'email', flex: 1}
        ];

        this.callParent(arguments);
    }
});