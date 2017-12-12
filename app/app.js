'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngAnimate',
  'ui.router',
  'ngTouch',
  'ui.materialize'

])
  .config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/views/main.html',
        controller: 'MainCtrl as mainPage'
      })
      .state('movies', {
        url: '/movies',
        templateUrl: '/views/movies.html',
        controller: 'MoviesCtrl as movieList'
      })
      .state('tv', {
        url: '/tv',
        templateUrl: '/views/tv.html',
        controller: 'TvCtrl as tvList'
      })
      .state('mdetail', {
        url: '/moviedetail',
        templateUrl: '/views/mdetail.html',
        controller: 'mdetailcontroller as movieDetail'
      })
      .state('tdetail', {
        url: '/tvshowdetail/',
        templateUrl: '/views/tdetail.html',
        controller: 'tdetailcontroller as tvDetail'
      });
  });
