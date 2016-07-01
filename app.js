var carlosapp = angular.module('carlos.app', ['ngRoute']);

carlosapp.config(function($routeProvider, $locationProvider) {
	
	$routeProvider

	.when('/', {
		templateUrl: 'viewer/inicial.html'
	})

	.when('/login', {
		templateUrl: 'viewer/Login.html',
		controller: 'SignUpCtrl'
	});

})
