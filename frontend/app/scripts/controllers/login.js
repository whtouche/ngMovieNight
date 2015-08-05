'use strict';

/**
 * @ngdoc function
 * @name ngNodeJwtApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the ngNodeJwtApp
 */
angular.module('ngNodeJwtApp').controller('LoginCtrl', function ($scope, alert, auth) {
    $scope.submit = function() {
        
        auth.login($scope.email, $scope.password)
            .success(function(res) {
                alert('success', 'Welcome', 'Thanks for coming back ' + res.user.email + '!');
            })
            .error(function(err) {
                alert('warning', 'Something went wrong', err.message);
            })
    }
});
