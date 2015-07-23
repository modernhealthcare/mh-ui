/* jshint ignore:start */
'use strict';

var mhApp = angular.module('directive.dropdown', []);

mhApp
  .directive('dropdown', [

      function () {

        return {
          restrict: 'A',
          link: function (scope, element, attrs) {
            $(element)
              .dropdown(
                scope.$eval(attrs.dropdown)
              )
            ;
          }
        };

      }

  ])
;
/* jshint ignore:end */
