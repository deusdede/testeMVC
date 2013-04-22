Ext.define('MVC.model.Cidade', {
	extend: 'Ext.data.Model',
    fields: [
        {name: 'id',    type: 'int'},
        {name: 'nome',  type: 'string'},
        {name: 'estado_id', type: 'int'}
    ]
});
