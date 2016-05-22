var chai = require('chai')
var chaiAsPromised = require('chai-as-promised');
var connect = require('connect');
var serveStatic = require('serve-static');
var expect = chai.expect;
chai.use(chaiAsPromised);

var baseURL = 'http://localhost:8098/'

module.exports = function () {
	
	this.Given(/^Start server$/, function (next) {
    
  // 	connect().use().listen(37940, function(){
		// 	next();
		// })	



    connect()
    .use(serveStatic("./"))
    // .use(function middleware1(req, res, next) {
    //   res.writeHead(301, {Location: 'https://angularjs.org'});
    //   res.end();
    //   console.log('I see request');
    // })
    .listen(8098, function(){
      console.log('server has started');
      next();
    }); 

    // connect().use(function middleware1(req, res, next) {
    //   res.writeHead(301, {Location: 'https://angularjs.org'});
    //   res.end();
    //   console.log('I see request');
    // }).listen(8098, function(){
    //   console.log('server has started');
    //   next();
    // });    
    
  });

  this.Then(/^Open app page$/,{timeout: 20000},  function (next) {
   
    browser.get(baseURL+'www').then(function () {
      
      browser.waitForAngular();

      browser.getCurrentUrl().then(function(currentUrl){
     		expect( currentUrl ).to.be.equal('https://angularjs.org/dsa');
     		next()
      });

    });

  });

  this.Then(/^Test$/, function (next) {
  	next()
 	});


}