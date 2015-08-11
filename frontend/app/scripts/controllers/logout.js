'use strict';

/**
 * @ngdoc function
 * @name ngNodeJwtApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the ngNodeJwtApp
 */
angular.module('ngNodeJwtApp').controller('LogoutCtrl', function ($auth, $state) {
    $auth.logout();
    $state.go('main');
});
