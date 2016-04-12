(
    function () {
        'use strict';
        angular.module('eKart.register')
            .controller('registerCtrl', ["$scope",
                                         "countriesFact",
                                         "statesFact",
               function ($scope, countriesFact, statesFact) {

                 function init() {
                        getCountries();
                        //getStates();
                        $scope.registerUser = {
                            firstName: "",
                            lastName: "",
                            address: "",
                            gender: "",
                            age: "",
                            email: "",
                            phoneNumber: "1234567890",
                            address: {
                                country: "",
                                state: "",
                                city: "",
                                streetNumber: "",
                                zipcode: ""
                            }
                        };
                    }

                function getCountries() {
                    countriesFact.getCountries()
                         .success(function (response) {
                            $scope.countries = response.countries;
                            })
                            .error(function (response) {
                                console.log(response);
                            });
                    }

                function getStates() {
                   statesFact.getStates()
                     .then(function (response) {
                        $scope.statesFromJson = response.data.states;
                            })
                       .catch(function (response) {
                                console.log("Error occurred");
                            });
                    }

                    $scope.countryChanged = function () {
                        $scope.states = [];


                        angular.forEach($scope.statesFromJson, function (item) {
                            if (item.countryCode == $scope.selectedCountry.code) {
                                $scope.states.push(item);
                            }
                        });
                    };

                    $scope.register = function () {
                        $scope.registerUser.address.country = $scope.selectedCountry.code;
                        $scope.registerUser.address.state=$scope.selectedState.code;
                        console.log($scope.registerUser);
                        $scope.isRegister=true;
                    }
                    init();
               }]);
    }
)();
