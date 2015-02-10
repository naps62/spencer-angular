(function() {
  'use strict';

  angular
    .module('spencer')
    .controller('NewExpenseCtrl', function($scope, Expense, $location) {

      function submit() {
        Expense.create($scope.newExpense).then(function() {
          $location.path('/');
        });
      }

      $scope.newExpense = Expense.createInstance();
      $scope.submit = submit;
    });
})();
