Ext.define('MVC.controller.Componentes', {
    extend: 'Ext.app.Controller',

    views: [
        'componente.Componente', 'Componente.Grid'
    ],
<<<<<<< HEAD
    models: ['Estado', 'Cidade', 'Senador'],
    stores: ['Estados', 'Cidades', 'Senadores'],
	
    init: function() {
        console.log('Controlador de componentes inicializado.');
=======
    models: ['Estado', 'Cidade'],
    stores: ['Estados', 'Cidades'],
	
    init: function() {
        console.log('Controlador principal inicializado.');
>>>>>>> bd648d4e60fa0ddd70871ab689aae94cbbb43f84
        
        this.control({
            
            'cmp #comboEstado': {
                select: function controla(combo, registro) {
                    console.log(registro[0].data.nome);
					//mostrar o estado escolhido
					var labelEstado = Ext.ComponentQuery.query('cmp #labelEstado')[0];
					labelEstado.setText(registro[0].data.nome);
					
                    console.log('filtrar dados cidade');
<<<<<<< HEAD
                    this.selecionaCidade(combo);
					
                    console.log('filtrar dados senador');
                    this.selecionaSenador(combo);
=======
                    this.selecionaCidade(combo, registro);
>>>>>>> bd648d4e60fa0ddd70871ab689aae94cbbb43f84
                }
            },
            'cmp #comboCidade': {
                select: function controla(combo, registro) {
                    console.log(registro[0].data.nome);
					//mostrar a cidade escolhida
					var labelCidade = Ext.ComponentQuery.query('cmp #labelCidade')[0];
					labelCidade.setText(registro[0].data.nome);
                }
            },
            'cmp #comboSenador': {
                select: function controla(combo, registro) {
                    console.log(registro[0].data.nome);
					//mostrar o senhador escolhido
					var labelSenador = Ext.ComponentQuery.query('cmp #labelSenador')[0];
					labelSenador.setText(registro[0].data.nome);
                }
            }
			
        });
    },

	selecionaCidade: function(combo) {
 
        console.log('selecionar cidade');
        console.log(combo.getValue());
        
        var comboCidade = Ext.ComponentQuery.query('cmp #comboCidade')[0];
        console.log(comboCidade);
 
        comboCidade.setDisabled(true);
        comboCidade.setValue('');
        comboCidade.store.removeAll();
 
        comboCidade.store.clearFilter(true);
        comboCidade.store.filter('estado_id',combo.getValue());
        comboCidade.setDisabled(false);
<<<<<<< HEAD
  },
  
  selecionaSenador: function(combo) {
 
        console.log('selecionar senador');
        console.log(combo.getValue());
        
        var comboSenador = Ext.ComponentQuery.query('cmp #comboSenador')[0];
 
        comboSenador.setDisabled(true);
        comboSenador.setValue('');
        comboSenador.store.removeAll();
 
        comboSenador.store.clearFilter(true);
        comboSenador.store.filter('estado_id',combo.getValue());
        comboSenador.setDisabled(false);
=======
>>>>>>> bd648d4e60fa0ddd70871ab689aae94cbbb43f84
  }
  
});