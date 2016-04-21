(
   function () {
       'use strict';
       angular.module('eKart')
              .controller('mainCtrl', ["$scope", function ($scope) {
                  $scope.content = "I am the content";
                  $scope.brandName = "e-Kart";

                  $scope.products = [];

                  $scope.$on("PRODUCT_SELECTED", function (evt, args) {
                      $scope.products.push(args.product);
                  });
                  $scope.$on("PRODUCT_REMOVE", function (evt, args) {
                      var index = _.indexOf($scope.products, args.product)
                      $scope.products.splice(index,1);
                  });
              }]);
   }
)();