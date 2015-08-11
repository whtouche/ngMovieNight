angular.module('ngNodeJwtApp').config(function($urlRouterProvider, $stateProvider, $httpProvider, $authProvider, API_URL) {
    
    $urlRouterProvider.otherwise('/');

    $stateProvider

    .state('main', {
        url: '/',
        templateUrl: '/views/main.html'
    })

    .state('register', {
        url: '/register',
        templateUrl: '/views/register.html',
        controller: 'RegisterCtrl'
    })
    .state('login', {
        url: '/login',
        templateUrl: '/views/login.html',
        controller: 'LoginCtrl'
    })  
    .state('jobs', {
        url: '/jobs',
        templateUrl: '/views/jobs.html',
        controller: 'JobsCtrl'
    })
    .state('logout', {
        url: '/logout',
        controller: 'LogoutCtrl'
    });

    $authProvider.loginUrl  = API_URL + 'auth/login';
    $authProvider.signupUrl = API_URL + 'auth/register';

    $httpProvider.interceptors.push('authInterceptor');
})
 
.constant('API_URL', 'http://localhost:1337/')
