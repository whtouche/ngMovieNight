'use strict';

/**
* @ngdoc function
* @name ngNodeJwtApp.controller:JobsCtrl
* @description
* # JobsCtrl
* Controller of the ngNodeJwtApp
*/
angular.module('ngNodeJwtApp').controller('PartnersCtrl', function ($scope, $http, API_URL, alert) {

    $http.get('http://localhost:1337/partner').success(function(partners) {
        $scope.partners = partners;
    }).error(function(err) {
        alert('warning', 'Unable to get partners', err.message);
    });
});
