(
 function () {
     'use strict';
     angular.module('eKart.common')
     .directive('ekartClick', [function () {
         return {
             restrict: "A",
             link: function (scope, element, attrs) {
                 console.log(scope);
                 console.log(element);
                 console.log(attrs);
             }
         }
     }]);
 }
)();