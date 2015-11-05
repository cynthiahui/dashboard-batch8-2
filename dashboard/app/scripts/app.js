angular
	.module('app',['ui.router'])
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){

		$urlRouterProvider

			.otherwise('/');

		$stateProvider
			.state('overview',{
				url:'/overview',
				templateUrl:'../templates/overview.html'
			})

			.state('work',{
				url:'/work',
				templateUrl:'../templates/work.html'
			})

			.state('producer',{
				url:'/producer',
				templateUrl:'../templates/producer.html'
			})

			.state('contact',{
				url:'/contact',
				templateUrl:'../templates/contact.html'
			})

			
			
	}])