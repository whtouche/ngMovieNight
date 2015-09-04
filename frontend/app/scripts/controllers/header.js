'use strict';

/**
 * @ngdoc function
 * @name movieNight.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the movieNight
 */
angular.module('movieNight').controller('HeaderCtrl', function ($scope, $auth) {
    $scope.isAuthenticated = $auth.isAuthenticated;
});
