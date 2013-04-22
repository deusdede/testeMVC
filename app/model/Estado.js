Ext.define('MVC.model.Estado', {
	extend: 'Ext.data.Model',
    fields: [
        {name: 'id',    type: 'int'},
        {name: 'nome',  type: 'string'},
        {name: 'sigla', type: 'string'}
    ]
});
