var dadosEstado = {
    estados: [
        {id: 1, nome: 'Goiás', sigla: 'GO'},
        {id: 2, nome: 'Minas Gerais', sigla: 'MG'},
        {id: 3, nome: 'Tocantins', sigla: 'TO'}
    ]
};

Ext.define('MVC.store.Estados', {
    extend: 'Ext.data.Store',
    model: 'MVC.model.Estado',
    autoLoad: true,
    data : dadosEstado,
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            root: 'estados'
        }
    }
});