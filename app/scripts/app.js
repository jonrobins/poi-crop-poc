'use strict';

/**
 * @ngdoc overview
 * @name poiCropPocApp
 * @description
 * # poiCropPocApp
 *
 * Main module of the application.
 */
angular
  .module('poiCropPocApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
