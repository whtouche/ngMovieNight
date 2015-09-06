(function () {
    'use strict';

    angular
        .module('ngMovieNight')
        .controller('MoviesController', MoviesController);

    MoviesController.$inject = ['$http', 'API_URL', 'alert'];
    function MoviesController($http, API_URL, alert) {
        var vm = this;

        $http.get('http://localhost:1337/movie').success(function (movies) {
            vm.movies = movies;
        }).error(function (err) {
            alert('warning', 'Unable to get movies', err.message);
        });
    }
})();