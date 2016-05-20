var chai = require('chai')
var chaiAsPromised = require('chai-as-promised');
var connect = require('connect');
var serveStatic = require('serve-static');
var expect = chai.expect;
chai.use(chaiAsPromised);

var baseURL = 'https://angularjs.org/'

module.exports = function () {
	
	this.Given(/^Start server$/, function (next) {
    
  	// connect().use(serveStatic("./")).listen(37940, function(){
			next();
		// })	

    
  });

  this.Then(/^Open app page$/, {timeout: 20 * 1000}, function (next) {
   
    browser.get(baseURL).then(function () {
      browser.waitForAngular();

      browser.getCurrentUrl().then(function(currentUrl){
     		expect( currentUrl ).to.be.equal(baseURL);
     		next()
      });

    });
  });

  this.Then(/^Test$/, function (next) {
  	next()
 	});


}