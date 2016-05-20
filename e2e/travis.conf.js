var exac = require('child_process').exec;

exports.config = {
	framework: 'custom',
	frameworkPath: require.resolve('protractor-cucumber-framework'),
  seleniumAddress: 'http://172.17.7.99:35303/wd/hub',
  specs: ['./features/*.feature'],

  capabilities: {
  	browserName: 'firefox'
  },
  directConnect: true,
  cucumberOpts: {
  	require:'./step_definitions/*.js'
  },
  onPrepare: function(){
  	console.log('TEST Preparation');
  }
};
