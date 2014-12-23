(function() {
  'use strict';

  angular
    .module('spencer')
    .factory('Expense', function(Config, $resource) {
      return $resource(Config.apiUrl + '/expenses/:id');
    });
})();
