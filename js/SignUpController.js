appcarlos.controller('SignUpCtrl', function($scope, $rootScope, $location, $timeout, SignUpService) {

	$scope.signup = function(){

		var user = { login: $scope.login, password: $scope.password };
		SignUpService.setUser(user);
		$location.path('/');
	}
});
