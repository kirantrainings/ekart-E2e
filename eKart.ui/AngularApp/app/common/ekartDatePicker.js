(
  function () {
      'use strict';
      angular.module("eKart.common")
      .directive('eKartDatePicker', [function () {
          var directiveObj = {};
          directiveObj.restrict = 'A';
          directiveObj.link = function (scope, element, attrs) {
              $(element).datepicker();
          };
          return directiveObj;
      }]);
  }
)();