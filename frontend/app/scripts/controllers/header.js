'use strict';

/**
 * @ngdoc function
 * @name ngNodeJwtApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the ngNodeJwtApp
 */
angular.module('ngNodeJwtApp').controller('HeaderCtrl', function ($scope, authToken) {
    $scope.isAuthenticated = authToken.isAuthenticated;
});
