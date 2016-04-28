(
function () {
    'use strict';
    angular.module('eKart.common')
           .directive('ekartNavBar', ['authenticateSvc', function (authenticateSvc) {
               return {
                   restict: "EA",
                   templateUrl: "../AngularApp/app/common/navbar/navbar.tpl.html",
                   link: function (scope, element, attrs) {
                       scope.$on("AUTHENTICATE_USER", function (evt, args) {
                           scope.userDetails = authenticateSvc.getUserDetails();
                       });
                   }
               
               };
           }]);
}
)();