Ext.define('MVC.view.componente.Principal' ,{
    extend: 'Ext.panel.Panel',
    alias : 'widget.cmp',

    title: 'Componentes',

    width: 600,
    height: 200,
    layout: 'vbox',
       	
    items: [
        {
            xtype: 'button',
            itemId: 'buttonCombo',
            text: 'Combos',
			scale: 'large'
        }		
    ]
});
