(function() {
  'use strict';

  angular
    .module('spencer')
    .factory('Day', function(DS) {
      return DS.defineResource({
        name: 'day',
        endpoint: 'days',

        relations: {
          hasMany: {
            expense: {
              localField: 'expenses',
              foreignKey: 'day_id',
            }
          }
        }
      });
    });
})();
