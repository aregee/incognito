'use strict';


angular.module('aapkeydilliApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ngAnimate',
    'facebook'
  ])
  .config(function($stateProvider, $urlRouterProvider, FacebookProvider) {
    //delete $httpProvider.defaults.headers.common['X-Requested-With'];
    FacebookProvider.init('859258640764878');
    $urlRouterProvider.otherwise('/');
    $stateProvider
    // route to show our basic form (/form)
      .state('index', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('form', {
        url: '/form',
        templateUrl: 'views/form.html',
        controller: 'formController'
      })
      .state('form.one', {
        url: '/profile',
        templateUrl: 'views/form-one.html'
      })
      .state('form.two', {
        url: '/interests',
        templateUrl: 'views/form-two.html'
      })
      .state('form.three', {
        url: '/payment',
        templateUrl: 'views/form-three.html'
      })
      .state('facebook', {
        url: '/social',
        templateUrl: 'views/question.html',
        controller: 'SocialAuthCtrl'
      })
  })
  .run(function($rootScope, Facebook) {

  });