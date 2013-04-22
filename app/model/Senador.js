Ext.define('MVC.model.Senador', {
	extend: 'Ext.data.Model',
    fields: [
        {name: 'id',    type: 'int'},
        {name: 'nome',  type: 'string'},
        {name: 'estado_id', type: 'int'}
    ]
});
