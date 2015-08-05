'use strict';

/**
* @ngdoc function
* @name ngNodeJwtApp.controller:JobsCtrl
* @description
* # JobsCtrl
* Controller of the ngNodeJwtApp
*/
angular.module('ngNodeJwtApp').controller('JobsCtrl', function ($scope, $http, API_URL, alert) {
    $http.get(API_URL + 'jobs')
    .success(function(jobs) {
        $scope.jobs = jobs;
    })
    .error(function(err) {
        alert('warning', 'Unable to get jobs', err.message);
    })
    $scope.jobs = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];
});
