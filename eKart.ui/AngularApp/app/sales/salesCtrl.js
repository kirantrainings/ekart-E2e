(
    function () {
        angular.module('eKart.sales')
            .controller("salesCtrl", ["$scope", "salesFact",
                                     function ($scope, salesFact) {
                                         function init() {
                                             salesFact.getAllGadgets().then(function (response) {
                                                 $scope.salesInfo = response.data;
                                             }).catch(function (errorResponse) {
                                                 console.log(error);
                                             });
                                         }
                                         init()

                                     }]);
    }
)
();
