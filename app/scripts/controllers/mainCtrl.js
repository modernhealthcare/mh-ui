/* jshint ignore:start */
'use strict';

var mhApp = angular.module('controllers.main', []);

mhApp
  .controller('mainCtrl', [
    '$scope',
    'mainService',

      function ($scope, mainService) {

        $scope.items = mainService.data;

        $scope.sortType = '';
        $scope.sortReverse = false;
        $scope.searchItems = '';

      }
  ])
;
/* jshint ignore:end */
