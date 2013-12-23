'use strict';

angular.module('javascriptsApp')
  .controller('MainCtrl',['$scope', '$location',  function ($scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.viewTest = function() {
      $location.url('/test');
    }
  }]);
