(function() {
  'use strict';

  angular
    .module('spencer')
    .factory('Day', function(Config, DS) {
      return DS.defineResource({
        name: 'day',
        endpoint: 'days',
        idAttribute: 'date',
        methods: {  }
      });
    });
})();
