(function() {
  'use strict';

  angular
    .module('spencer')
    .controller('NewExpenseCtrl', function($scope, $mdDialog, Expense, $location) {

      function submit() {
        Expense.create($scope.newExpense).then(function() {
          $mdDialog.hide();
          $location.path('/');
        });
      }

      function cancel() {
        $mdDialog.cancel();
      }

      function hide() {
        $mdDialog.hide();
      }

      $scope.newExpense = Expense.createInstance();
      $scope.submit = submit;
      $scope.cancel = cancel;
      $scope.hide = hide;
    });
})();
