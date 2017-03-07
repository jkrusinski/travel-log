angular.module('travel-log.dashboard', [])

.controller('DashboardCtrl', function($scope, $location, trips, user, Trips, Auth) {

  $scope.logout = Auth.logout;
  $scope.user = user;
  $scope.trips = trips;
  $scope.logout = Auth.logout;

  $scope.newTrip = {
    name: '',
    description: ''
  };

  $scope.makeTrip = function() {
    if ($scope.newTrip.name && $scope.newTrip.description) {
      Trips.newTrip($scope.newTrip)
        .then(function(trip) {
          $scope.trips.push(trip);
          $scope.newTrip.name = '';
          $scope.newTrip.description = '';
        });
    }
  };



});
