'use strict';

/**
 * @ngdoc function
 * @name ngMovieNight.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the ngMovieNight
 */
angular.module('ngMovieNight').controller('HeaderCtrl', function ($scope, $auth) {
    $scope.isAuthenticated = $auth.isAuthenticated;
});
