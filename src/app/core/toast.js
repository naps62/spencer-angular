(function() {
  'use strict';

  angular
    .module('spencer')
    .service('$toast', function($mdToast) {
      this.show = function(message) {
        var toast = $mdToast.simple()
          .content(message)
          .action('Close')
          .highlightAction(false)
          .position('bottom center');

        $mdToast.show(toast);
      };
    })
})();
