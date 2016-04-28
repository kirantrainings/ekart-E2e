(function () {
    'use strict';
    var authenticateSvc = function () {
        var userDetails = {
            isAuthenticated: false,
            UserName: "",
            FirstName: "",
            LastName: ""
        };
        var resetUserDetails = function () {
            userDetails.isAuthenticated = false;
            userDetails.UserName = "";
            userDetails.LastName = "";
            userDetails.FirstName = "";
        }
        this.authenticate = function (authenticate) {
            if (authenticate.isAuthenticated) {
                userDetails.isAuthenticated = authenticate.isAuthenticated;
                userDetails.UserName = authenticate.UserName;
                userDetails.FirstName = authenticate.FirstName;
                userDetails.LastName = authenticate.LastName;
            }
            else {
                resetUserDetails();
            }
        };
        this.logOffUser = function () {
            resetUserDetails();
            return userDetails;
        };
        this.getUserDetails = function () {
            return userDetails;
        };
    };
    angular.module('eKart.common', [])
           .service('authenticateSvc', [authenticateSvc])


})();