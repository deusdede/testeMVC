Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'MVC',

    appFolder: 'app',

	controllers: ['Principal', 'Componentes'],
	
	launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'auto',
            items: {
                xtype: 'grid'
            }
        });
    }
});