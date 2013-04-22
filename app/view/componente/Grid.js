Ext.define('MVC.view.componente.grid' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.grid',

    title: 'Componentes',

    width: 600,
    height: 400,
    layout: 'vbox',
       	
    items: [
		{
			xtype: 'button',
			itemId: 'buttonCombo',
			text: 'Combos'		
		}
    ]
});
