angular.module('travel-log', [
  'ngRoute',
  'travel-log.services',
  'travel-log.auth',
  'travel-log.dashboard'
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
      controller: 'DashboardCtrl'
    })
    .otherwise({
      redirectTo: '/dashboard'
    });
})

.run(function($rootScope, $location, Auth) {
  $rootScope.$on('$routeChangeStart', function (evt, next, current) {
    
  });
});
