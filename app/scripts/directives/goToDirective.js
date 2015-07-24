/* jshint ignore:start */
'use strict';

var mhApp = angular.module('directive.goTo', []);

mhApp
  .directive('goTo', [
      '$log',
      '$location',

      function ($log, $location) {

        return {
          link: function (scope, element, attrs) {
            $(element)
              .on('click', function () {
                $location.path(attrs.goTo);
                $log.log(attrs.goTo);
              })
            ;
          }
        };

      }

  ])
;
/* jshint ignore:end */
