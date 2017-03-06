angular.module('travel-log.auth', [])

.controller('AuthCtrl', function($scope, $location, Auth) {
  $scope.username = '';
  $scope.password = '';

  $scope.login = function() {
    Auth.login($scope.username, $scope.password);
  };
});
