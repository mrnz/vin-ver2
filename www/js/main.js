require.config({
	paths: {
		'angular': '../../node_modules/angular/angular',
		'uiBootstrap': '../../node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls',
		'app': 'app',
	},

	shim: {
		angular: {
			exports: 'angular'
		},
		uiBootstrap: {
			exports: 'uiBootstrap',
			deps: ['angular']
		}
	},
	baseUrl: './js'
});

require(['uiBootstrap', 'app'], function () {
	
});