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
    FacebookProvider.init('403047269862604');
    $urlRouterProvider.otherwise('/form/one');
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
        url: '/one',
        templateUrl: 'views/form-one.html'
      })
      .state('form.two', {
        url: '/two',
        templateUrl: 'views/form-two.html'
      })
      .state('form.three', {
        url: '/three',
        templateUrl: 'views/form-three.html'
      })
      .state('form.four', {
        url: '/four',
        templateUrl: 'views/form-four.html'
      })
      .state('form.six', {
        url: '/six',
        templateUrl : 'views/form-six.html'
      })
      .state('form.eight', {
        url: '/eight',
        templateUrl: 'views/form-eight.html'
      })
      .state('form.nine', {
        url:'/nine',
        templateUrl: 'views/form-nine.html'
      })
      .state('form.tenth', {
        url:'/ten',
        templateUrl: 'views/form-ten.html'
      })
      .state('facebook', {
        url: '/social',
        templateUrl: 'views/question.html',
        controller: 'SocialAuthCtrl'
      })
  })
  .run(function($rootScope, Facebook) {

  });
