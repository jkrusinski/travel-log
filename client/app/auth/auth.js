angular.module('travel-log.auth', [])

.controller('AuthCtrl', function($scope, $location, Auth) {
  $scope.username = '';
  $scope.password = '';
  $scope.passCheck = '';
  $scope.firstName = '';
  $scope.lastName = '';
  $scope.email = '';


  $scope.login = function() {

    Auth.login($scope.username, $scope.password)

    .then(function(success) {
      if (success) {
        $location.path('/dashboard');
      }
    });
  };

  $scope.signup = function() {

    var newUser = {
      username: $scope.username,
      password: $scope.password,
      firstName: $scope.firstName,
      lastName: $scope.lastName,
      email: $scope.email
    };

    Auth.signup(newUser)

    .then(function(success) {
      if (success) {
        $location.path('/dashboard');
      }
    });
  };
});
