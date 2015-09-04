'use strict';

/**
 * @ngdoc function
 * @name movieNight.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the movieNight
 */
angular.module('movieNight').controller('LogoutCtrl', function ($auth, $state) {
    $auth.logout();
    $state.go('main');
});
