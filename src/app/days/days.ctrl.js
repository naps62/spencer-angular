(function() {
  'use strict';

  angular
    .module('spencer')
    .controller('DaysCtrl', function($scope, Day) {
      function fetch() {
        Day.findAll().then(function(days) {
          $scope.days = days;
        });
      }

      fetch();
    });
})();
