define(['uiRouter', 'uiBootstrap', 'templates', 'homeCtrl'], function(uiRouter, uiBootstrap, templates, homeCtrl) {

	var app = angular.module('app',['ui.router', 'ui.bootstrap']);
	
	app.run( templates );

	app.controller('homeCtrl', homeCtrl);

	
	                    
	app.config(["$stateProvider", "$urlRouterProvider", "$httpProvider",function($stateProvider, $urlRouterProvider, $httpProvider) {
		
		$urlRouterProvider.otherwise('/home');
		
		$stateProvider
			.state('home', {
				url:'/home',
				templateUrl: 'templates/home.html',
				controller: 'homeCtrl'
			});

	}]);

	return app;


});