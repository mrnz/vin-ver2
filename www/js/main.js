require.config({
	paths: {
		'angular': '../../node_modules/angular/angular',
		'uiRouter': '../../node_modules/angular-ui-router/release/angular-ui-router',
		'uiBootstrap': '../../node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls',
		'app': 'app',
		'templates': 'templates',
		// controllers
		'homeCtrl': 'controllers/homeCtrl'
	},

	shim: {
		angular: {
			exports: 'angular'
		},
		uiRouter: {
			exports: 'uiRouter',
			deps: ['angular']
		},
		uiBootstrap: {
			exports: 'uiBootstrap',
			deps: ['angular']
		}
	},
	baseUrl: './js'
});

require(['uiBootstrap', 'app'], function (aa, app) {
	angular.bootstrap(document, ['app'])
});