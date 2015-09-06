(function () {
    'use strict';

    angular
        .module('ngMovieNight')
        .controller('LogoutController', LogoutController);

    LogoutController.$inject = ['$auth', '$state'];
    function LogoutController($auth, $state) {
        var vm = this;

        $auth.logout();
        $state.go('main');
    }
})();