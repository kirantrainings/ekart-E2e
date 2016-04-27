(
function () {
    'use strict';
    angular.module('eKart.common')
           .directive('ekartLogo', [function () {
               return {
                   //this property makes the directive to use as an
                   // an element or attribute or class.
                   //E for element
                   //A for attribute
                   //C for Class
                   restrict: "E",
                   template:' <img src="../../../../images/logo.jpg" style="height:50px;width:76px" />',
               };
           }]);
}
)();


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
                   restrict: "A,E",
                   transclude: true,
                   template: "<div ng-transclude>Mycontent</div>"
               };
           }]);
}
)();