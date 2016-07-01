app.factory("SignUpService", function($window, $rootScope) {
  return {
    setUser: function(val) {
      $window.localStorage && $window.localStorage.setItem('user-storage', JSON.stringify(val));
    },
    getUser: function(val) {
	  var user = JSON.parse($window.localStorage && $window.localStorage.getItem('user-storage'));
	  if ((user != null) && (user.login == val.login && user.password == val.password)){
	  	return true;
	  } else {
		return false;
	  }
    }
  };
});
