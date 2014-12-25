(function() {
  'use strict';

  angular
    .module('spencer')
    .controller('ExpensesCtrl', function($scope, Expense, $mdDialog, $toast) {
      $scope.fetch = fetch;
      $scope.showNewExpenseDialog = showNewExpenseDialog;
      $scope.$watch('query', $scope.fetch);
      $scope.fetch();

      function fetch(query) {
        if (typeof query === undefined) { query = ''; }
        Expense.query({query: query}).then(function(data) {
          $scope.expenses = data;
        });
      };

      function showNewExpenseDialog(event) {
        $mdDialog.show({
          controller: NewExpenseCtrl,
          templateUrl: 'app/expenses/new.html',
          targetEvent: event
        })
        .then(function(answer) {
          $toast.show('Expense added');
          $scope.fetch();
        }, function() {
          $toast.show('Cancelled')
        });
      }
    });

  function NewExpenseCtrl($scope, $mdDialog, Expense) {
    $scope.newExpense = new Expense();
    $scope.submit = submit;
    $scope.cancel = cancel;
    $scope.hide = hide;

    function submit() {
      $scope.newExpense.create().then(function() {
        $mdDialog.hide();
      });
    };

    function cancel() {
      $mdDialog.cancel();
    }

    function hide() {
      $mdDialog.hide();
    }
  }
})();
