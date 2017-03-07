angular.module('travel-log.services', [])

.factory('Auth', function($http) {
  var sessionUser;

  // when page refreshes, check cookie for valid session
  $http({
    method: 'GET',
    url: '/api/users'
  })
  .then(function(user) {
    sessionUser = user;
  })
  .catch(function() {
    sessionUser = undefined;
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
    .then(function(user) {
      sessionUser = user;
      return user;
    })
    .catch(function() {
      sessionUser = undefined;
    });
  };

  var signup = function(user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function(user) {
      sessionUser = user;
      return user;
    })
    .catch(function() {
      sessionUser = undefined;
    });
  };

  var logout = function() {
    return $http({
      method: 'POST',
      url: '/api/users/logout'
    })
    .then(function() {
      sessionUser = undefined;
      return true;
    })
    .catch(function() {
      sessionUser = undefined;
      return false;
    });
  };

  var isAuth = function() {
    return !!sessionUser;
  };

  var getUser = function() {
    return sessionUser;
  };

  return {
    login: login,
    signup: signup,
    logout: logout,
    isAuth: isAuth,
    getUser: getUser
  };
})

.factory('Trips', function($http) {

  var newTrip = function(trip) {
    return $http({
      method: 'POST',
      url: '/api/trips',
      data: trip
    });
  };

  var getTrips = function() {
    return $http({
      method: 'GET',
      url: '/api/trips'
    });
  };

  var getTrip = function(id) {
    return $http({
      method: 'GET',
      url: '/api/trips/' + id
    });
  };

  var updateTrip = function(id, updated) {
    return $http({
      method: 'PUT',
      url: '/api/trips/' + id,
      data: updated
    });
  };

  return {
    newTrip: newTrip,
    getTrips: getTrips,
    getTrip: getTrip,
    updateTrip: updateTrip
  };
})

.factory('Places', function($http) {

  var newPlace = function(place) {
    return $http({
      method: 'POST',
      url: '/api/places',
      data: place
    });
  };

  var getPlaces = function() {
    return $http({
      method: 'GET',
      url: '/api/places'
    });
  };

  var getPlace = function(id) {
    return $http({
      method: 'GET',
      url: '/api/places/' + id
    });
  };

  var updatePlace = function(id, updated) {
    return $http({
      method: 'PUT',
      url: '/api/places/' + id,
      data: updated
    });
  };

  return {
    newPlace: newPlace,
    getPlaces: getPlaces,
    getPlace: getPlace,
    updatePlace: updatePlace
  };
});
