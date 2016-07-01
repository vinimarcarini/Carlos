appcarlos.controller('HomeCtrl', function($scope, $rootScope, $location, $timeout, SignUpService) {
	
	$rootScope.activetab = $location.path();

	$scope.loginToSeeBooks = function(){
		var user = { login: $scope.nome, senha: $scope.senha };
		var loggedUser = SignUpService.getUser(user);
		if (loggedUser){
			$location.path('/books');
		} else {
			alert('Usuário e/ou senha inválidos');
		}
	}
});
