'use strict';

/**
 * @ngdoc function
 * @name ngMovieNight.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the ngMovieNight
 */
angular.module('ngMovieNight').controller('LogoutCtrl', function ($auth, $state) {
    $auth.logout();
    $state.go('main');
});
