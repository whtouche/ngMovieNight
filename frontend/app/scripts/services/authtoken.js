'use strict';

/**
* @ngdoc service
* @name ngMovieNight.authToken
* @description
* # authToken
* Factory in the ngMovieNight.
*/
angular.module('ngMovieNight').factory('authToken', function ($window) {
    var storage   = $window.localStorage;
    var userToken = 'userToken';
    var cachedToken;
    var currentUser;

    var authToken =  {
        setToken: function(token) {
            cachedToken = token;
            storage.setItem(userToken, token);
        },
        getToken: function() {
            if(!cachedToken) {
                cachedToken = storage.getItem(userToken);
            }
            return cachedToken;
        },
        isAuthenticated: function() {
            return !!authToken.getToken();
            console.log(authToken.getToken());
        },
        removeToken: function() {
            cachedToken = null;
            storage.removeItem(userToken);
        },
        currentUser: function() {
            return currentUser;
        }
    };

    return authToken;
});
