(
 function () {
     'use strict';
     angular.module('eKart.common')
     .directive('ekartAlphabetsOnly', [function () {
         return {
             restrict: "A",
             link: function (scope, element, attrs) {
                 $(element).bind("keypress", alphabetsOnly);
                 function alphabetsOnly(evt) {
                     if (!((evt.keyCode >= '65' && evt.keyCode <= 90)||
                         (evt.keyCode >= '97' && evt.keyCode <= 122)))
                         evt.preventDefault();
                 }
             }
         }
     }]);
 }
)();