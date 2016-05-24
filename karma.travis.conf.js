// Karma configuration
// Generated on Fri May 20 2016 18:00:39 GMT+0100 (BST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'requirejs'],
    
    

    // list of files / patterns to load in the browser
    files: [
        
        'tests/test-main.js',
        {pattern: 'node_modules/angular/angular.js', included: false},
        {pattern: 'node_modules/angular-ui-router/release/angular-ui-router.min.js', included: false},
        {pattern: 'node_modules/angular-mocks/angular-mocks.js', included: false},
        {pattern: 'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js', included: false},
        {pattern: 'www/js/**/*.js', included: false},
        {pattern: 'tests/*.test.js', included: false},
        {pattern: 'tests/**/*.test.js', included: false}
        
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Firefox'],


	customLaunchers: {
	  chrome_without_security: {
	    base: 'Chrome',
	    flags: ['--disable-web-security'],
	    displayName: 'Chrome w/o security'
	  }
	},

    captureTimeout: 60000,
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
