angular.module('travel-log.place', [])

.controller('PlaceCtrl', function($scope, $location) {
  var init = function(element) {

    var coors = new google.maps.LatLng(-33.8665, 151.1956);

    var mapOptions = {
      center: coors,
      zoom: 13,
      scrollwheel: false
    };

    var map = new google.maps.Map(element, mapOptions);

    var autocomplete = new google.maps.places.Autocomplete(document.getElementById('place-input'));
  };

  google.maps.event.addDomListener(window, 'load', init);
});
