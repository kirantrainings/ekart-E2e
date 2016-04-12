(
    function(){
        'use strict';
        function navCtrlFn($scope){
            $scope.brandName="e-Kart";
            
        }
        angular.module("eKart.navigation")
               .controller('navCtrl',['$scope',navCtrlFn]);
    }
)();