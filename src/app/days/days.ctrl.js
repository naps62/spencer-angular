(function() {
  'use strict';

  angular
    .module('spencer')
    .controller('DaysCtrl', function($scope, Day) {
      function fetch() {
        Day.query().then(function(data) {
          $scope.days = data;
        });
      }

      fetch();
    })
})();
