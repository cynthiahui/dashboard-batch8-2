var app = angular.module('myApp', ['ui.router', 'ngCookies', 'ngAnimate', 'ui.bootstrap', 'angularMoment'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('login', {
                url: '/',
                templateUrl: '../templates/login.html'
            })

        .state('root', {
            url: '/root',
            templateUrl: '../templates/root.html'
        })

        .state('root.overview', {
            url: '/overview',
            templateUrl: '../templates/overview.html'
        })

        .state('root.work', {
            url: '/work',
            templateUrl: '../templates/work.html'
        })

        .state('root.contact', {
                url: '/contact',
                templateUrl: '../templates/contact.html'
            })
        
        .state('root.video', {
            url: '/video',
            templateUrl: '../templates/video.html'
        })

        .state('root.kun', {
            url: '/kun',
            templateUrl: '../templates/kun.html'
        })

        .state('root.cj', {
            url: '/cj',
            templateUrl: '../templates/cj.html'
        });
    });
