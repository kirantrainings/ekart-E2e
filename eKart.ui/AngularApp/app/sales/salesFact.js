(
function () {
    'use strict';
    angular.module("eKart.sales")
    .factory("salesFact", ["$http", function ($http) {
        var baseUrl="api/"
        var getGadgets = function () {
            return $http.get(baseUrl + "values")
        };

        return {
            getAllGadgets:getGadgets
        }
    }])
     
})();