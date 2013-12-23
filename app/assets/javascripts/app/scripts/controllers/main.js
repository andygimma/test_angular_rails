'use strict';

angular.module('javascriptsApp')
  .controller('MainCtrl', function ($scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.viewTest = function() {
      $location.url('/test');
    }
  });
