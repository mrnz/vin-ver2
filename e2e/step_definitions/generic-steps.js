var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var connect = require('connect');
var serveStatic = require('serve-static');
var expect = chai.expect;

chai.use(chaiAsPromised);

var baseURL = 'http://localhost:8098/';

module.exports = function () {
	
	this.Given(/^Start server$/, function (next) {
    
    connect()
    .use(serveStatic("./"))
    .listen(8098, function(){
      console.log('server has started');
      next();
    }); 
    
  });

  this.Then(/^Open app page$/,{timeout: 20000},  function (next) {
   
    browser.get(baseURL+'www/build').then(function () {
      
      browser.waitForAngular();

      browser.getCurrentUrl().then(function(currentUrl){
     		expect( currentUrl ).to.be.equal(baseURL+'www/build/#/home');
     		next();
      });

    });

  });

  this.Then(/^Test page$/, function (next) {
  	element( by.id('super-coder') ).isPresent().then(function(result) {
      expect( result ).to.equal(true);
      next();
    });
     
      // element(by.id('dsadsa')).isPresent().then(function(val) {
      //   console.log(val)
      //   expect( val ).to.equal(true);
      //   next()
      // })
      
      
    
 	});


};