(function() {
  'use strict';

  angular
    .module('spencer')
    .controller('ExpensesCtrl', function($scope, Expense) {
      function fetch(query) {
        if (typeof query === undefined) { query = ''; }
        Expense.findAll({query: query}).then(function(expenses) {
          $scope.expenses = expenses;
        });
      }

      $scope.fetch = fetch;
      $scope.$watch('query', $scope.fetch);
      $scope.fetch();
    });
})();
