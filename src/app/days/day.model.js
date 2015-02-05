(function() {
  'use strict';

  angular
    .module('spencer')
    .factory('Day', function(DS) {
      return DS.defineResource({
        name: 'day',
        endpoint: 'days',
        idAttribute: 'date',

        relations: {
          hasMany: {
            expense: {
              localField: 'expenses',
              foreignKey: 'date',
            }
          }
        }
      });
    });
})();
