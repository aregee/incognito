'use strict';

angular.module('aapkeydilliApp')
  .controller('MainCtrl', function($scope, $state) {
    $scope.isLandingPage = function() {
      var path;
      return path = $state.current.name, _.contains(['form.one'], path);
    };
    $scope.isSecondPage = function() {
      var path;
      return path = $state.current.name, _.contains(['form.two'], path);
    };
    $scope.isThirdPage = function() {
      var path;
      return path = $state.current.name, _.contains(['form.three'], path);
    };
    $scope.isFourthPage = function() {
      var path;
      return path = $state.current.name, _.contains(['form.four'], path);
    };
  });