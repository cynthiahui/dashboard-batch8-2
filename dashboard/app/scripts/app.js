  var app = angular.module('myApp', ['ui.router', 'ngResource']).
  config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
      $stateProvider.state('login', {
          url: '/login',
          templateUrl: 'templates/login.html'
      }).state('root', {
          url: '/root',
          templateUrl: 'templates/root.html'
      });
  }).run(function($rootScope, $location) {
      $rootScope.$on("getUser", function(event, next, current) {
          console.log(next.templateUrl);
          console.log(current);
          console.log($location);
          // if ($rootScope.loggedInUser == null) {
          // no logged user, redirect to /login
          // if (next.templateUrl === "partials/root.html") {} else {
          $location.path("/root");
          console.log($location);
          // }
      });
  });
