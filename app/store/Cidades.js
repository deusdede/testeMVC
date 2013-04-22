var dadosCidade = {
    cidades : [
	    {id:1, nome:'Goiânia', estado_id:1},
	    {id:2, nome:'Anápolis', estado_id:1},
	    {id:3, nome:'Itumbiara', estado_id:1},
	    {id:4, nome:'Belo Horizonte', estado_id:2},
	    {id:5, nome:'Formiga', estado_id:2},
	    {id:6, nome:'Palmas', estado_id:3},
	    {id:7, nome:'Gurupi', estado_id:3}
	]
};

Ext.define('MVC.store.Cidades', {
    extend: 'Ext.data.Store',
    model: 'MVC.model.Cidade',
    autoLoad: true,
    data : dadosCidade,
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            root: 'cidades'
        }
    }
});