angular.module('travel-log.services', [])

.factory('Auth', function($http, $location) {
  var user;

  var login = function(username, password) {
    return $http({
      method: 'POST',
      url: '/api/users/login',
      data: {
        username: username,
        password: password
      }
    })
    .then(function(success) {
      console.log(success);
    })
    .catch(function(fail) {
      console.log(fail);
    });
  };

  return {
    login: login
  };
});
