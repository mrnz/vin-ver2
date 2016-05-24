
'use strict';

var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;
for (var file in window.__karma__.files) {
  if (TEST_REGEXP.test(file)) allTestFiles.push(file);
}

require.config({
  // Karma serves files under /base, which is the basePath from your config file

  baseUrl: '/base',
  // dynamically load all test files
  deps: allTestFiles,
  paths: {

		'angular': 'node_modules/angular/angular',
		'angularMocks': 'node_modules/angular-mocks/angular-mocks',
		'uiRouter': 'node_modules/angular-ui-router/release/angular-ui-router.min',
		'uiBootstrap': 'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls',
		'app': 'www/js/app',
		'templates': 'www/js/templates',
		'homeCtrl': 'www/js/controllers/homeCtrl'

  },
  shim: {
		
		angular: { exports: 'angular' },
  	angularMocks: {
  		exports: 'angular.mock', 
  		deps: ['angular'] 
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

  priority: [
    'angular'
  ],
  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
