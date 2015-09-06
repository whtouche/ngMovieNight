(function () {
    'use strict';

    angular
        .module('ngMovieNight')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['alert', '$auth'];
    function RegisterController(alert, $auth) {
        var vm = this;

        vm.submit = function () {
            $auth.signup({ email: vm.email, password: vm.password })
                .then(function (res) {
                    alert('success', 'Account Created!', 'Welcome, ' + res.data.user.email + '!');
                })
                .catch(function (err) {
                    alert('warning', 'Something went wrong', err.message);
                })
        }
    }
})();