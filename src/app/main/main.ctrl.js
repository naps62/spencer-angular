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
      };

      $scope.sidebarItems = [
        { text: 'All Expenses', sref: 'expenses' },
        { text: 'New expense', sref: 'new_expense' }
      ];
    });
})();
