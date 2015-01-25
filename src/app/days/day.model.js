(function() {
  'use strict';

  angular
    .module('spencer')
    .factory('Day', function(Config, railsResourceFactory) {
      return railsResourceFactory({
        url: (Config.apiUrl + '/days'),
        name: 'day'
      });
    });
})();
