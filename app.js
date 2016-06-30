var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
	
	$routeProvider

	.when('/', {
		templateUrl: 'views/inicial.html'
	})

	.when('/signup', {
		templateUrl: 'views/SignUpView.html',
		controller: 'SignUpCtrl'
	});

})

.directive('starRating', function() {
	return {
		retrict: 'E',
		link: function(scope, elem, attrs){
			$(elem).rating({ size: 'lg', language: 'pt-BR', readonly: true});
			$(elem).rating('update', attrs.bookValue);
		}
	}
})
