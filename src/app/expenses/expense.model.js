(function() {
  'use strict';

  angular
    .module('spencer')
    .factory('Expense', function(Config, railsResourceFactory) {
      return railsResourceFactory({
        url: (Config.apiUrl + '/expenses'),
        name: 'expense'
      });
    });
})();
