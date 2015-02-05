(function() {
  'use strict';

  angular
    .module('spencer')
    .factory('Expense', function(Config, DS) {
      return DS.defineResource({
        name: 'expense',
        endpoint: 'expenses',
        methods: {  }
      });
    });
})();
