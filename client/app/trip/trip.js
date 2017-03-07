angular.module('travel-log.trip', [])

.controller('TripCtrl', function($scope, user, trip, Auth, Trips) {
  $scope.trip = trip;
});
