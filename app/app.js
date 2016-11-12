'use strict';
angular.module('myApp', [
  'ngRoute', 'ngResource'
]).
config([ '$routeProvider', function( $routeProvider) {
  $routeProvider
      .when('/photoalbum', {
        templateUrl: 'views/photoalbum.html',
        controller: 'PhotoalbumCtrl'
      })
      .when('/photo/:id', {
        templateUrl: 'views/photo.html',
            controller: 'PhotoCtrl'
    })
      .otherwise({
        redirectTo: '/photoalbum'
      });
}]);
