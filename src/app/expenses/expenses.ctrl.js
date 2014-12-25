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

      // function showNewExpenseDialog(event) {
      //   $mdDialog.show({
      //     controller: NewExpenseCtrl,
      //     templateUrl: 'app/expenses/new.html',
      //     targetEvent: event
      //   })
      //   .then(function() {
      //     $toast.show('Expense added');
      //     $scope.fetch();
      //   }, function() {
      //     $toast.show('Cancelled');
      //   });
      // }

      console.log('asd');
      
      $scope.fetch = fetch;
      // $scope.showNewExpenseDialog = showNewExpenseDialog;
      $scope.$watch('query', $scope.fetch);
      $scope.fetch();
    });
})();
