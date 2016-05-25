({
	paths: {
		'angular': '../../node_modules/angular/angular',
		'uiBootstrap': '../../node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls',
		'uiRouter': '../../node_modules/angular-ui-router/release/angular-ui-router',
		
		'app': 'app',

		'templates': 'templates',
		// controllers
		'homeCtrl': 'controllers/homeCtrl'
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
	baseUrl: './',
	name: './../../node_modules/almond/almond',
	out: '../build/js/main.js',
	include: ['main'],
	insertRequire: ['main'],
	wrap: true
});

