'use strict';

var mhApp = angular.module('mainRouter', ['ngRoute']);

mhApp
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main.html',
        controller: 'mainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
