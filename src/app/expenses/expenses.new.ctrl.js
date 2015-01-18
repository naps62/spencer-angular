(function() {
  'use strict';

  angular
    .module('spencer')
    .controller('NewExpenseCtrl', function($scope, $mdDialog, Expense, $location) {

      function submit() {
        $scope.newExpense.create().then(function() {
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

      $scope.newExpense = new Expense();
      console.log($scope.newExpense);
      $scope.submit = submit;
      $scope.cancel = cancel;
      $scope.hide = hide;
    });
})();
