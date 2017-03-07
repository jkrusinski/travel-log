angular.module('travel-log.dashboard', [])

.controller('DashboardCtrl', function($scope, $location, trips, user, Trips, Auth) {

  $scope.logout = Auth.logout;
  $scope.user = user;
  $scope.trips = trips;
  $scope.logout = Auth.logout;

});
