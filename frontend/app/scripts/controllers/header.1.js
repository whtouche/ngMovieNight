(function() {
'use strict';

    angular
        .module('ngMovieNight')
        .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['$auth'];
    function HeaderController($auth) {
        var vm = this;

        vm.isAuthenticated = $auth.isAuthenticated;
    }
})();