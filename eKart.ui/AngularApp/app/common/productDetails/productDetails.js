(
  function () {
      'use strict';
      angular.module("eKart.common")
      .directive('ekartProductDetails', [function () {
          return {
              restrict: "A",
              templateUrl: "AngularApp/app/common/productDetails/product.tpl.html",
              scope: {
                nameOfTheProduct:"@",  //one Way communication from ctrl to directive
                productDetails: "="
              }
          }
      }]);
  }
)();