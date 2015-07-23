/* jshint ignore:start */
'use strict';

var mhApp = angular.module('controllers.main', []);

mhApp
  .controller('mainCtrl', [
    '$log',
    '$scope',
    'appService',

      function ($log, $scope, appService) {

        $scope.items = appService.data;
        $scope.sortType = 'name';
        $scope.sortReverse = false;
        $scope.searchItems = '';

      }
  ])
;
/* jshint ignore:end */
