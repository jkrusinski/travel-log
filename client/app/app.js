angular.module('travel-log', [
  'ngRoute',
  'travel-log.services',
  'travel-log.auth',
  'travel-log.dashboard',
  'travel-log.trip',
  'travel-log.place'
])

.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: 'app/auth/login.html',
      controller: 'AuthCtrl'
    })
    .when('/signup', {
      templateUrl: 'app/auth/signup.html',
      controller: 'AuthCtrl'
    })
    .when('/dashboard', {
      templateUrl: 'app/dashboard/dashboard.html',
      controller: 'DashboardCtrl',
      resolve: {
        user: function(Auth) {
          return Auth.isAuth();
        },
        trips: function(Trips) {
          return Trips.getTrips();
        }
      }
    })
    .when('/trip', {
      templateUrl: 'app/trip/trip.html',
      controller: 'TripCtrl'
    })
    .when('/place', {
      templateUrl: 'app/place/place.html',
      controller: 'PlaceCtrl'
    })
    .otherwise({
      redirectTo: '/dashboard'
    });
});
