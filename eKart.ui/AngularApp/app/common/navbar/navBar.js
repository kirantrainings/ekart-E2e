(
function () {
    'use strict';
    angular.module('eKart.common')
           .directive('ekartNavBar', [function () {
               return {
                   restict: "E",
                   templateUrl: "../AngularApp/app/common/navbar/navbar.tpl.html"
               };
           }]);
}
)();