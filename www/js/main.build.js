({
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
	baseUrl: './',
	name: './../../node_modules/almond/almond',
	out: '../build/js/main2almond.js',
	include: ['main'],
	insertRequire: ['main'],
	wrap: true
})

