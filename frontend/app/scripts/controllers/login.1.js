(function () {
    'use strict';

    angular
        .module('ngMovieNight')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['alert', 'auth', '$auth', '$window', '$rootScope'];
    function LoginController(alert, auth, $auth, $window, $rootScope) {
        var vm = this;
        vm.submit = function () {
            $auth.login({ email: vm.email, password: vm.password })
                .then(function (res) {
                    alert('success', 'Welcome', 'Thanks for coming back ' + res.data.user.email);
                    $window.localStorage.currentUser = JSON.stringify(res.data.user);
                    $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
                    console.log($rootScope.currentUser);
                })
                .catch(handleError);
        };

        function handleError(err) {
            alert('warning', 'Something went wrong', err.message);
        }
    }
})();