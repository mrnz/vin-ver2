var exac = require('child_process').exec;

exports.config = {
	framework: 'custom',
	frameworkPath: require.resolve('protractor-cucumber-framework'),
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./features/*.feature'],

  capabilities: {
  	browserName: 'chrome'
  },
  directConnect: true,
  cucumberOpts: {
  	require:'./step_definitions/*.js'
  },
  onPrepare: function(){
  	console.log('TEST Preparation');
  }
};
