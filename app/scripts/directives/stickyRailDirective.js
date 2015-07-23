/* jshint ignore:start */
'use strict';

var mhApp = angular.module('directive.stickyRail', []);

mhApp
  .directive('stickyRail', [

      function () {

        return {
          restrict: 'A',
          link: function (scope, element, attrs) {
            $(element)
              .sticky(
                scope.$eval(attrs.stickyRail)
              )
            ;
          }
        };

      }

  ])
;
/* jshint ignore:end */
