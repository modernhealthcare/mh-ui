/* jshint ignore:start */
'use strict';

var mhApp = angular.module('mainRouter', ['ngRoute']);

mhApp
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main.html',
        controller: 'mainCtrl'
      })
      .when('/category/:id', {
        templateUrl: 'partials/category.html',
        controller: 'categoryCtrl'
      });
      // use the HTML5 History API
      $locationProvider.html5Mode(true);
  })
;
/* jshint ignore:end */
