(function() {
  'use strict';

  angular
    .module('spencer')
    .controller('NewExpenseCtrl', function($scope, $mdDialog, Expense) {

      function submit() {
        $scope.newExpense.create().then(function() {
          $mdDialog.hide();
        });
      }

      function cancel() {
        $mdDialog.cancel();
      }

      function hide() {
        $mdDialog.hide();
      }

      $scope.newExpense = new Expense();
      $scope.submit = submit;
      $scope.cancel = cancel;
      $scope.hide = hide;
    });
})();
