(
function () {
    'use strict';
    angular.module('eKart.common')
           .directive('transcludeDemo', [function () {
               return {
                   //this property makes the directive to use as an
                   // an element or attribute or class.
                   //E for element
                   //A for attribute
                   //C for Class
                   restrict: "A",
                   template: ' <h1>HelloGuys</h1>',
               };
           }]);
}
)();