(function() {
  'use strict';

  angular
    .module('spencer')
    .controller('ExpensesCtrl', function($scope, Expense) {
      var ctrl = this;

      $scope.fetch = function(query) {
        if (typeof query === undefined) { query = ''; }
        Expense.query({query: query}, function(data) {
          $scope.expenses = data;
        });
      };

      $scope.$watch('query', $scope.fetch);
      $scope.fetch();

      $scope.newExpense = new Expense();
      $scope.addExpense = function() {
        $scope.newExpense.$save(function() {
          ctrl.fetch();
        });
      };
    });
})();
