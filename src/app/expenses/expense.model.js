(function() {
  'use strict';

  angular
    .module('spencer')
    .factory('Expense', function(DS) {
      return DS.defineResource({
        name: 'expense',
        endpoint: 'expenses'
      });
    });
})();
