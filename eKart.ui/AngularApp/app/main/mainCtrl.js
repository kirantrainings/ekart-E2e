(
   function () {
       'use strict';
       angular.module('eKart')
              .controller('mainCtrl', ["$scope", function ($scope) {
                  $scope.content = "I am the content";
                  $scope.brandName = "e-Karttttt";
                  $scope.navUrl = "../AngularApp/app/navigation/navigation.tpl.html";

                  $scope.loadContent = function (type) {
                      if (type == 'register') {
                          $scope.contentUrl = "../AngularApp/app/register/register.tpl.html"
                      }
                      if (type == "login") {
                          $scope.contentUrl = "../AngularApp/app/login/login.tpl.html"
                      }
                      if (type == 'sales') {
                          $scope.contentUrl = "../AngularApp/app/sales/sales.tpl.html"
                      }
                  };

              }]);
   }
)();