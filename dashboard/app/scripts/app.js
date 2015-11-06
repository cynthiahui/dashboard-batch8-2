
  var app = angular.module('myApp', ['ui.router', 'ngResource']).
  config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
      $stateProvider
      .state('login', {
          url: '/login',
          templateUrl: '../templates/login.html'
      }).state('root', {
          url: '/root',
          templateUrl: '../templates/root.html'
      })

      .state('overview',{
				url:'/overview',
				templateUrl:'../templates/overview.html'
			})

		.state('work',{
				url:'/',
				templateUrl:'../templates/work.html'
			})

		.state('producer',{
				url:'/producer',
				templateUrl:'../templates/producer.html'
			})

		.state('contact',{
				url:'/contact',
				templateUrl:'../templates/contact.html'
			});



  }).run(function($rootScope, $location) {
      $rootScope.$on("getUser", function(event, next, current) {
          console.log(next.templateUrl);
          console.log(current);
          console.log($location);
          // if ($rootScope.loggedInUser == null) {
          // no logged user, redirect to /login
          // if (next.templateUrl === "partials/root.html") {} else {
          $location.path("root");
          console.log($location);
          // }
      });
  });

