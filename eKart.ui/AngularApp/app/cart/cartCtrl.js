(
    function () {
        angular.module('eKart.cart')
            .controller("cartCtrl", ["$scope",'salesFact',
                                     function ($scope,salesFact) {
                                         function init() {
                                             $scope.cart = salesFact.getProductsForCheckout();
                                             $scope.total = salesFact.getTotalForCheckout();
                                         }
                                         init()
                                     }]);
    }
)
();
