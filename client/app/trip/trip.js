angular.module('travel-log.trip', [])

.controller('TripCtrl', function($scope, user, trip, Auth, Trips) {
  $scope.trip = trip;
  $scope.logout = Auth.logout;
  $scope.place = {};
  $scope.travelDate;

  var input = document.getElementById('place-autocomplete');
  var autocomplete = new google.maps.places.Autocomplete(input);

  google.maps.event.addListener(
    autocomplete,
    'place_changed',
    function() {
      var place = autocomplete.getPlace();
      $scope.place.placeId = place['place_id'];
      $scope.place.trip = trip._id;
      $scope.place.name = place.name;
      $scope.$apply();
    }
  );
});
