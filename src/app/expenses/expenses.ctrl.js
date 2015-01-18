(function() {
  'use strict';

  angular
    .module('spencer')
    .controller('ExpensesCtrl', function($scope, Expense) {
      function fetch(query) {
        if (typeof query === undefined) { query = ''; }
        Expense.query({query: query}).then(function(data) {
          $scope.expenses = data;
        });
      }

      $scope.fetch = fetch;
      $scope.$watch('query', $scope.fetch);
      $scope.fetch();
    });
})();
