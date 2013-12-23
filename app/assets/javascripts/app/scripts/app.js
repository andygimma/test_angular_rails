'use strict';

angular.module('javascriptsApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../templates/main.html',
        controller: 'MainCtrl'
      })
      .when('/test', {
        templateUrl: '../templates/post.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  