
'use stict';

var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

// Get a list of all the test files to include
Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    // If you require sub-dependencies of test files to be loaded as-is (requiring file extension)
    // then do not normalize the paths
    var normalizedTestModule = file.replace(/^\/base\/|\.js$/g, '');
    allTestFiles.push(normalizedTestModule);
  }
});

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base/js',

  // dynamically load all test files
  deps: allTestFiles,


  paths:{
    'angular': 'base/../../node_modules/angular/angular',
    'uiRouter': 'base/../../node_modules/angular-ui-router/release/angular-ui-router',
    'uiBootstrap': 'base/../../node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls',
    'app': 'app',

    // controllers
    'homeCtrl': 'base/controllers/homeCtrl'
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
  priority: [
    'angular'
  ],
  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
