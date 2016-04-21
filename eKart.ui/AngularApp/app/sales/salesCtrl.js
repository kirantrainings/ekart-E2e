(
    function () {
        angular.module('eKart.sales')
            .controller("salesCtrl", ["$scope", "salesFact","$rootScope",'$state',
                                     function ($scope, salesFact,$rootScope,$state) {
                                         function init() {
                                             salesFact.getAllGadgets().then(function (response) {
                                                 $scope.salesInfo = response.data;
                                             }).catch(function (errorResponse) {
                                                 console.log(error);
                                             });
                                         }

                                         $scope.itemSelected = function (item) {
                                             if (item.selected) {
                                                 $rootScope.$broadcast('PRODUCT_SELECTED', { product: item })
                                             }
                                             else {
                                                 $rootScope.$broadcast('PRODUCT_REMOVE', { product: item })
                                             }
                                         };

                                         $scope.checkout = function () {
                                             var selectedProducts = _.where($scope.products, { selected: true });
                                             salesFact.setProductsForCheckout(selectedProducts);
                                             $state.go('cart');
                                         };
                                         init()

                                     }]);
    }
)
();
