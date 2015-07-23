/* jshint ignore:start */
'use strict';

var mhApp = angular.module('directive.goTo', []);

mhApp
  .directive('goTo', [
      '$location',

      function ($location) {

        return {
          link: function (scope, element, attrs) {
            element
              .on('click', function () {
                $location.path(attrs.goTo);
              })
            ;
          }
        };

      }

  ])
;
/* jshint ignore:end */
