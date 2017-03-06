angular.module('travel-log.services', [])

.factory('Auth', function($http, $location) {
  var loggedIn = false;

  var login = function(username, password) {
    return $http({
      method: 'POST',
      url: '/api/users/login',
      data: {
        username: username,
        password: password
      }
    })
    .then(function() {
      loggedIn = true;
      return true;
    })
    .catch(function() {
      return false;
    });
  };

  var signup = function(user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function() {
      loggedIn = true;
      return true;
    })
    .catch(function() {
      return false;
    });
  };

  var logout = function() {
    return $http({
      method: 'POST',
      url: '/api/users/logout'
    })
  };

  var isAuth = function() {
    return loggedIn;
  };

  return {
    login: login,
    signup: signup,
    isAuth: isAuth
  };
});
