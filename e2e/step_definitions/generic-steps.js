var chai = require('chai')
var chaiAsPromised = require('chai-as-promised');
var connect = require('connect');
var serveStatic = require('serve-static');
var expect = chai.expect;
chai.use(chaiAsPromised);

var baseURL = 'https://angularjs.org'

module.exports = function () {
	
	this.Given(/^Start server$/, function (next) {
    
  // 	connect().use(serveStatic("./")).listen(37940, function(){
		// 	next();
		// })	
    connect().use(function middleware1(req, res, next) {
      res.writeHead(301, {Location: 'https://angularjs.org'});
      res.end();
      console.log('-------------request')
      
    }).listen(8098, function(){
      console.log('-------------2')
     next();
    });    
    
  });

  this.Then(/^Open app page$/,{timeout: 20000},  function (next) {
   
    browser.get(baseURL).then(function () {
      browser.waitForAngular();

      browser.getCurrentUrl().then(function(currentUrl){
     		expect( currentUrl ).to.be.equal('https://angularjs.org/');
     		next()
      });

    });
  });

  this.Then(/^Test$/, function (next) {
  	next()
 	});


}