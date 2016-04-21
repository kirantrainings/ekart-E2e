(
 function () {
     'use strict';
     angular.module('eKart.common')
     .directive('ekartNumbersOnly', [function () {
         return {
             restrict: "A",
             link: function (scope, element, attrs) {
                 
                 $(element).bind("keypress", numbersOnly);
                 function numbersOnly(evt) {
                     if (!(evt.keyCode >= 48 && evt.keyCode <= 57))
                         evt.preventDefault();
                 }
             }
         }
     }]);
 }
)();