(
function () {
    'use strict';
    angular.module("eKart.sales")
    .factory("salesFact", ["$http", function ($http) {
        var baseUrl="api/"
        var getGadgets = function () {
            return $http.get(baseUrl + "values")
        };
        var productsForCheckout = [];

        var getCheckOutProducts = function () {
            return productsForCheckout;
        };
        var setProductsForCheckout = function (products) {
            productsForCheckout = products;
        };
        var calculateTotal = function () {
            var total = 0;
            _.each(productsForCheckout, function (item) {
                total += parseInt(item.Price);
            });
            return total;
        };

        return {
            getAllGadgets: getGadgets,
            getProductsForCheckout: getCheckOutProducts,
            setProductsForCheckout: setProductsForCheckout,
            getTotalForCheckout:calculateTotal
        }
    }])
     
})();