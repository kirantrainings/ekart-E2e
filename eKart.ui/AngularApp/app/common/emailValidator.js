(
  function () {
      'use strict';
      angular.module("eKart.common")
      .directive('emailValidator', [function () {
          return {
              restrict: "A",
              require:"ngModel",
              link: function (scope, element, attrs,ctrl) {
                 
                  ctrl.$parsers.unshift(validateEmail);
                  ctrl.$formatters.unshift(validateEmailForExistingData);

                  function validateEmail(data) {
                      var regex = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;

                      var valid=regex.test(data)
                          ctrl.$setValidity('emailValidator', valid);
                          return valid ? data : undefined;
                  }

                  function validateEmailForExistingData(data) {
                      var regex = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;

                      var valid = regex.test(data)
                      ctrl.$setValidity('emailValidator', valid);
                      return data;
                  }
                  

              }
          }
      }]);
  }
)();