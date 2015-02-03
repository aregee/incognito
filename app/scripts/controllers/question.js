'use strict';

angular.module('aapkeydilliApp')
  .controller('SocialAuthCtrl', function($scope, Facebook) {
    $scope.login = function() {
      // From now on you can use the Facebook service just as Facebook api says
      Facebook.login(function(response) {
        // Do something with response.
        console.log(response);
      });
    };

    $scope.getLoginStatus = function() {
      Facebook.getLoginStatus(function(response) {
        if (response.status === 'connected') {
          $scope.loggedIn = true;
          console.log(response);
        } else {
          $scope.loggedIn = false;
          console.log(response);
        }
      });
    };

    $scope.me = function() {
      Facebook.api('/me/feed', function(response) {
        $scope.user = response;
        console.log(response);
      });
    };

    $scope.postUpdate = function() {
      Facebook.api('/me/feed', 'post', {message:'Hello World'}, {scope: 'publish_actions'}, function(response){
        console.log(response);
      });
    };
    $scope.$watch(function() {
      // This is for convenience, to notify if Facebook is loaded and ready to go.
      return Facebook.isReady();
    }, function(newVal) {
      // You might want to use this to disable/show/hide buttons and else
      $scope.facebookReady = true;
    });
  });