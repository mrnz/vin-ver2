'use strict';


var path = require('path');
var buildTarget = 'www/build' 

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
	    },
	    deleteOldBuild: {
	    	command: function() {
	    		console.log(__dirname+'/'+buildTarget)
	    		var fs = require('fs');
	    		try{
	    			fs.statSync(__dirname+'/'+buildTarget).isDirectory();
	    			return 'rm -R '+buildTarget;
	    		}catch(err){
	    			return '';
	    		}
	    	}
	    }
	  },


		connect: {
		  server: {
		    options: {
		      port: 8000,
		      hostname: '*',
		      base: './',
		      keepalive: true
		    }
		  }
		},

    compass: {
      dist: {
        options: {
          sassDir: './www/scss/',
          cssDir: './www/build/css/',
          environment: 'production',
          outputStyle: 'expanded'
        }
      },
      dev: {
        options: {
          sassDir: './www/scss/',
          cssDir: './www/css/',
          environment: 'development',
          outputStyle: 'expanded'
        }
      }
    },

    watch: {
      scss: {
        files: ['./www/scss/*.scss'],
        tasks: ['compass:dev'],
        options: {
          spawn: false,
        },
      },
      templates: {
      	files: ['./www/templates/**/*.html'],
        tasks: ['templates'],
        options: {
          spawn: false,
        },
      }
    },    

    ngtemplates:  {
		  app:        {
		    src: './www/templates/**.html',
		    dest: './www/js/templates.js',
		    options:  {
		      bootstrap: function(module, script) {
		      	return 'define([],function() { function run($templateCache) {'+ script + '}; return [\'$templateCache\', run] });';
		      },
		      url: function(url) {
		    		return url.replace(  './www/', '' );
		    	},

		    }
		  }
		},

		copy: {
			copyIndexAndImages: {
				files: [
					{	expand: true, src: ['www/index.build.html'], dest: buildTarget, flatten: true, rename: function(dest, src) { return  dest+"/index.html" }, filter: 'isFile'	},
					{	expand: true, cwd: "www/img", src: ['*'], dest: buildTarget + '/img', filter: 'isFile'	}
				]
			}
			
		},


		karma: {
    	unit: {
    		configFile: 'karma.conf.js'
    	},
    	travis:{
    		configFile: 'karma.travis.conf.js'
    	}
    },

		ftp_push: {
	    your_target: {
	      options: {
        	username: grunt.option('ftpUser'),
          password: grunt.option('ftpPass'),
	    		host: "gdziejestvin.home.pl",
	    		dest: "/public_html/vin-ver2"
	      },
	      files: [
	        {expand: true, cwd: 'www/build', src: ["**/*"] }
	      ]
	    }
	  },

		coveralls: {
		    options: {
		        debug: true,
		        coverageDir: 'directory name',
		        dryRun: true,
		        force: true,
		        recursive: true
		    }
		}

	});
	
	grunt.loadNpmTasks('grunt-protractor-runner');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-ftp-push');
  grunt.loadNpmTasks('grunt-karma-coveralls');

	grunt.registerTask('e2e-local', ["protractor:e2e_local"]);
	grunt.registerTask('e2e-travis', ["protractor:e2e_travis"]);


	
	grunt.registerTask('unit-local', ["karma:unit"]);
	grunt.registerTask('unit-travis', ["karma:travis"]);

	grunt.registerTask('templates', ['ngtemplates']);

	grunt.registerTask('build', ["shell:deleteOldBuild", "templates", "compass:dist", "shell:target", "copy:copyIndexAndImages"]);

	// Default task(s).
  grunt.registerTask('default', ['watch']);


};
