define(['uiRouter', 'uiBootstrap', 'homeCtrl'], function(uiRouter, uiBootstrap, homeCtrl) {

	var app = angular.module('app',['ui.router', 'ui.bootstrap'])
	
	app.controller('homeCtrl', homeCtrl)

	
	app.config(["$stateProvider", "$urlRouterProvider", "$httpProvider",function($stateProvider, $urlRouterProvider, $httpProvider) {
		
		$urlRouterProvider.otherwise('/home');
		
		$stateProvider
			.state('home', {
				url:'/home',
				templateUrl: 'templates/home.html',
				controller: 'homeCtrl'
			})

	}])

	return app;


});