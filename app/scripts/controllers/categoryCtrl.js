/* jshint ignore:start */
'use strict';

var mhApp = angular.module('controllers.category', []);

mhApp
  .controller('categoryCtrl', [
    '$log',
    '$scope',
    '$http',
    '$routeParams',
    'appService',

      function ($log, $scope, $http, $routeParams, appService) {

        $scope.items = appService.data;
        $scope.options = $scope.items;

        var id = $routeParams.id;

        for (var i = 0; i < $scope.items.length; i += 1) {
          var item = $scope.items[i];
          if (item.id === id) {
            $scope.item = item;
          }
        }

      }
  ])
;
/* jshint ignore:end */
