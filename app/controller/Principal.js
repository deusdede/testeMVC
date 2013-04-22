Ext.define('MVC.controller.Principal', {
    extend: 'Ext.app.Controller',

    views: [
        'componente.Principal'
    ],
	
    init: function() {
        console.log('Controlador principal inicializado.');
        
        this.control({
            
            'cmp #buttonCombo': {
                click: this.comboEstados
            }
			
        });
    },
	
	comboEstados: function() {
        console.log('Carregar combo dos estados.');	
		var view = Ext.widget('useredit');
        console.log(view);
	}
});