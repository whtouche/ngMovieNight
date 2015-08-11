'use strict';

/**
 * @ngdoc function
 * @name ngNodeJwtApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the ngNodeJwtApp
 */
angular.module('ngNodeJwtApp').controller('RegisterCtrl', function ($scope, alert, $auth) {
    $scope.submit = function() {
        $auth.signup({ email: $scope.email, password: $scope.password })
        .then(function(res) {
            alert('success', 'Account Created!', 'Welcome, ' + res.data.user.email + '!');
        })
        .catch(function(err) {
            alert('warning', 'Something went wrong', err.message);
        })
    }
});
