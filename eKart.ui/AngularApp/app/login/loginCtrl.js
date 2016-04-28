(function () {
    'use strict';
    var loginCtrl = function ($scope, $rootScope,loginFact, authenticateSvc, $state) {
        $scope.login = {
            UserName: "",
            Password: ""
        };

        $scope.loginUser = function () {
            loginFact.loginUser($scope.login)
                .then(function (response) {
                    if (response.statusText=="OK" && response.status==200) {
                        var userDetails = response.data;
                        userDetails.isAuthenticated = true;
                        authenticateSvc.authenticate(userDetails);
                        $rootScope.$broadcast('AUTHENTICATE_USER', { isAuthenticated: true })
                        $state.go('sales');
                    }
                })
                .catch(function (response) {
                });
        }

    };
    angular.module('eKart.login')
           .controller('loginCtrl',
           ["$scope","$rootScope","loginFact","authenticateSvc",'$state',loginCtrl])

})();