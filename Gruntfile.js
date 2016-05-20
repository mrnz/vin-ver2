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
	  },


		connect: {
		  server: {
		    options: {
		      port: 8000,
		      hostname: '*',
		      base: './',
		      keepalive: true,

		      onCreateServer: function(server, connect, options) {
		        	console.log(server)
		        	console.log('--------------')
		        	console.log(connect)
		        	console.log('--------------')
		        	console.log(options)
		        	console.log('--------------')
		      }
		    }
		  }
		},
		exec: {
		  start_server: {
		    command: 'grunt connect &'
		  }
		}



	});
	
	grunt.loadNpmTasks('grunt-protractor-runner');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-exec');

	grunt.registerTask('e2e-local', ["exec","protractor:e2e_local"]);
	grunt.registerTask('e2e-travis', ["protractor:e2e_travis"]);
	grunt.registerTask('e2e-exec', ["exec"]);
	grunt.registerTask('build', ["shell:target"]);



};
