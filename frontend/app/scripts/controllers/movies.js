'use strict';

/**
* @ngdoc function
* @name movieNight.controller:JobsCtrl
* @description
* # JobsCtrl
* Controller of the movieNight
*/
angular.module('movieNight').controller('MoviesCtrl', function ($scope, $http, API_URL, alert) {

    $http.get('http://localhost:1337/movie').success(function(movies) {
        $scope.movies = movies;
    }).error(function(err) {
        alert('warning', 'Unable to get movies', err.message);
    });
});
