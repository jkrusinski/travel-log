angular.module('travel-log.dashboard', [])

.controller('DashboardCtrl', function($scope, $location, Auth) {
  if (!Auth.isAuth()) {
    $location.path('/login');
  }

});
