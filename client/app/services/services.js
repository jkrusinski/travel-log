angular.module('travel-log.services', [])

.factory('Auth', function($http, $location) {

  var isAuth = function() {
    return $http({
      method: 'GET',
      url: '/api/users'
    })
    .then(function(res) {
      return res.data;
    })
    .catch(function() {
      $location.path('/login');
    });
  };

  var login = function(username, password) {
    return $http({
      method: 'POST',
      url: '/api/users/login',
      data: {
        username: username,
        password: password
      }
    })
    .then(function(res) {
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
    .then(function(res) {
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
      $location.path('/login');
    })
    .catch(function() {
      $location.path('/login');
    });
  };

  return {
    login: login,
    signup: signup,
    logout: logout,
    isAuth: isAuth
  };
})

.factory('Trips', function($http) {
  var sendData = function(res) {
    return res.data;
  };

  var consoleError = function(err) {
    console.error(err);
  };

  var newTrip = function(trip) {
    return $http({
      method: 'POST',
      url: '/api/trips',
      data: trip
    }).then(sendData, consoleError);
  };

  var getTrips = function() {
    return $http({
      method: 'GET',
      url: '/api/trips'
    }).then(sendData, consoleError);
  };

  var getTrip = function(id) {
    return $http({
      method: 'GET',
      url: '/api/trips/' + id
    }).then(sendData, consoleError);
  };

  var updateTrip = function(id, updated) {
    return $http({
      method: 'PUT',
      url: '/api/trips/' + id,
      data: updated
    }).then(sendData, consoleError);
  };

  return {
    newTrip: newTrip,
    getTrips: getTrips,
    getTrip: getTrip,
    updateTrip: updateTrip
  };
})

.factory('Places', function($http) {

  var sendData = function(res) {
    return res.data;
  };

  var consoleError = function(err) {
    console.error(err);
  };

  var newPlace = function(place) {
    return $http({
      method: 'POST',
      url: '/api/places',
      data: place
    }).then(sendData, consoleError);
  };

  var getPlaces = function() {
    return $http({
      method: 'GET',
      url: '/api/places'
    }).then(sendData, consoleError);
  };

  var getPlace = function(id) {
    return $http({
      method: 'GET',
      url: '/api/places/' + id
    }).then(sendData, consoleError);
  };

  var updatePlace = function(id, updated) {
    return $http({
      method: 'PUT',
      url: '/api/places/' + id,
      data: updated
    }).then(sendData, consoleError);
  };

  return {
    newPlace: newPlace,
    getPlaces: getPlaces,
    getPlace: getPlace,
    updatePlace: updatePlace
  };
});
