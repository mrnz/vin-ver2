'use strict';


var path = require('path');

module.exports = function(grunt){

	grunt.initConfig({

	  protractor: {
	    options: {
	      noColor: false
	    },
	    e2e_local: {
	      configFile: "./e2e/conf.js"
	    },
	    e2e_travis: {
	      configFile: "./e2e/travis.conf.js"
	    },
	  },

	
		shell: {
	    options: {
	      stderr: false
	    },
	    target: {
	      command: 'r.js -o www/js/main.build.js'
	    }
	    // another: 'ls ./src' // shorthand
	  }



	});

	grunt.loadNpmTasks('grunt-protractor-runner');
	grunt.loadNpmTasks('grunt-shell');


	grunt.registerTask('e2e-local', ["protractor:e2e_local"]);
	grunt.registerTask('e2e-travis', ["protractor:e2e_travis"]);
	grunt.registerTask('build', ["shell:target"]);



};
