(function() {
  'use strict';

  angular
    .module('spencer')
    .directive('datePicker', function() {
      return {
        restrict: 'E',
        scope: {
          ngModel: '='
        },
        templateUrl: 'app/components/datePicker/template.html'
        // link: function($scope) {
          
        // }
      };
    });
})();
