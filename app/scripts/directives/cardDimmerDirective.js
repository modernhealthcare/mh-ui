/* jshint ignore:start */
'use strict';

var mhApp = angular.module('directive.cardDimmer', []);

mhApp
  .directive('cardDimmer', [

      function () {

        return {
          restrict: 'A',
          link: function (scope, element, attrs) {
            $(element)
              .dimmer(
                scope.$eval(attrs.cardDimmer)
              )
            ;
          }
        };

      }

  ])
;
/* jshint ignore:end */
