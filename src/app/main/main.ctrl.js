(function() {
  'use strict';

  angular
    .module('spencer')
    .controller('MainCtrl', function($scope, $mdSidenav) {
      $scope.toggleSidebar = function() {
        $mdSidenav('nav').toggle();
      };
      $scope.closeSidebar = function() {
        $mdSidenav('nav').close();
      }
    });
})();
