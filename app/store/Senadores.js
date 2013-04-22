var dadosSenador = {
    senadores : [
	    {id:1, nome:'Senador GO 1', estado_id:1},
	    {id:2, nome:'Senador GO 2', estado_id:1},
	    {id:3, nome:'Senador GO 3', estado_id:1},
	    {id:4, nome:'Senador MG 1', estado_id:2},
	    {id:5, nome:'Senador MG 2', estado_id:2},
	    {id:6, nome:'Senador TO 1', estado_id:3},
	    {id:7, nome:'Senador TO 2', estado_id:3}
	]
};

Ext.define('MVC.store.Senadores', {
    extend: 'Ext.data.Store',
    model: 'MVC.model.Senador',
    autoLoad: true,
    data : dadosSenador,
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            root: 'senadores'
        }
    }
});