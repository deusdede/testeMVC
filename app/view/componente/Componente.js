Ext.define('MVC.view.componente.Componente' ,{
    extend: 'Ext.panel.Panel',
    alias : 'widget.combos',

    title: 'Componentes',

    width: 600,
    height: 400,
    layout: 'vbox',
       	
    items: [
        {
            xtype: 'combo',
            itemId: 'comboEstado',
            fieldLabel: 'Escolha o estado',
            labelWidth: 150, 
            store: 'Estados',
            queryMode: 'local',
            displayField: 'nome',
            valueField: 'id',
            width: 500
        },
		{
			xtype: 'label',
			itemId: 'labelEstado',
			text: 'estado escolhido'
		},
        {
            xtype: 'combo',
            itemId: 'comboCidade',
            fieldLabel: 'Escolha a cidade',
            labelWidth: 150, 
            store: 'Cidades',
            queryMode: 'local',
            displayField: 'nome',
            valueField: 'id',
            width: 500
        },
		{
			xtype: 'label',
			itemId: 'labelCidade',
			text: 'cidade escolhido'
<<<<<<< HEAD
		},
        {
            xtype: 'combo',
            itemId: 'comboSenador',
            labelWidth: 150, 
            fieldLabel: 'Escolha o senador',
            store: 'Senadores',
            queryMode: 'local',
            displayField: 'nome',
            valueField: 'id',
            width: 500,
            disabled: true
        },    
		{
			xtype: 'label',
			itemId: 'labelSenador',
			text: 'senador escolhido'
=======
>>>>>>> bd648d4e60fa0ddd70871ab689aae94cbbb43f84
		}
		
    ]
});
