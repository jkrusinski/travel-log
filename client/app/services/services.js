angular.module('travel-log.services', [])

.factory('Auth', function($http) {
  var loggedIn = false;

  // when page refreshes, check cookie for valid session
  $http({
    method: 'GET',
    url: '/api/users'
  })
  .then(function() {
    loggedIn = true;
  })
  .catch(function() {
    loggedIn = false;
  });

  var login = function(username, password) {
    return $http({
      method: 'POST',
      url: '/api/users/login',
      data: {
        username: username,
        password: password
      }
    })
    .then(function() {
      loggedIn = true;
      return true;
    })
    .catch(function() {
      return false;
    });
  };

  var signup = function(user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function() {
      loggedIn = true;
      return true;
    })
    .catch(function() {
      return false;
    });
  };

  var logout = function() {
    return $http({
      method: 'POST',
      url: '/api/users/logout'
    })
    .then(function() {
      loggedIn = false;
      return true;
    })
    .catch(function() {
      loggedIn = false;
      return false;
    });
  };

  var isAuth = function() {
    return true;
    return loggedIn;
  };

  return {
    login: login,
    signup: signup,
    logout: logout,
    isAuth: isAuth
  };
})

.factory('Trips', function($http) {

  var newTrip = function(trip) {
    return $http({
      method: 'POST',
      url: '/api/trips',
      data: trip
    })

    .then(function(doc) {
      return doc.id;
    })

    .catch(function() {
      return undefined;
    });
  };

  var getTrips = function() {
    return $http({
      method: 'GET',
      url: '/api/trips'
    });
  };

  return {
    trip: trip,
    getTrips: getTrips
  };
})

.factory('Places', function($http) {

  var newPlace = function(place) {
    return $http({
      method: 'POST',
      url: '/api/places',
      data: place
    })

    .then(function(doc) {
      return doc.id;
    })

    .catch(function() {
      return undefined;
    });
  };

  var getPlaces = function() {
    return $http({
      method: 'GET',
      url: '/api/places'
    });
  };

  return {
    newPlace: newPlace,
    getPlaces: getPlaces
  };
});
