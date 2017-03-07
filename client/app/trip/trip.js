angular.module('travel-log.trip', [])

.controller('TripCtrl', function($scope, user, trip, Auth, Places, Trips) {
  $scope.trip = trip;
  $scope.logout = Auth.logout;
  $scope.place = {};
  $scope.travelDate;
  $scope.input;

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

  $scope.addPlace = function() {
    if ($scope.place.name && $scope.travelDate) {
      $scope.place.date = $scope.travelDate;

      Places.newPlace($scope.place)
        .then(function(place) {
          $scope.input = '';
          $scope.travelDate = '';
          $scope.trip.places.push(place);
          return Trips.updateTrip($scope.trip._id, $scope.trip);
        })
        .then(console.log, console.log);
    }
  };
});
