(
function () {
    'use strict';
    angular.module("eKart.sales")
    .factory("salesFact", ["$http","$q",function ($http,$q) {
        var baseUrl = "api/";
        var gadgets = [{ "GadgetId": "1", "Model": "SamsungE7", "Price": "20000" }, { "GadgetId": "2", "Model": "iPhone 65", "Price": "25000" }, { "GadgetId": "3", "Model": "Note5", "Price": "40000" }, { "GadgetId": "4", "Model": "iPadMini", "Price": "60000" }, { "GadgetId": "5", "Model": "SamsungEdge", "Price": "500000" }];

        var getGadgets = function () {
            //step1 create a deferred object 
            // deferredObject will have the following properties
            //.promise  this always will be returned.
            //.resolve  to handle the positive responses
            //.reject   to handle negative responses
            var deferred = $q.defer();

            if (gadgets && gadgets.length>0) {
                deferred.resolve(gadgets);
            }
            else {
                $http.get(baseUrl + "values").then(function (response) {
                    if (response.statusText == "OK") {
                        //if the response is success resolve it
                        gadgets = response.data;
                        deferred.resolve(gadgets);
                    }
                    else {
                        //if the response is success reject it
                        deferred.reject(response);
                    }
                });
            }
            return deferred.promise;
            //deferred.promise will have the follwoing properties
            //.then
            //.catch
            //.finally
        };
        var productsForCheckout = [];

        var getProductsForCheckout = function () {
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
            getProductsForCheckout: getProductsForCheckout,
            setProductsForCheckout: setProductsForCheckout,
            getTotalForCheckout:calculateTotal
        }
    }])
     
})();