(function() {
  'use strict';

  angular.module('spencer', [
      'ngAnimate',
      'ngCookies',
      'ngTouch',
      'ngSanitize',
      'ui.router',
      'ngMaterial',
      'angularMoment',
      'rails']
    )
    .config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
      $stateProvider
        .state('expenses', {
          url: '/expenses',
          templateUrl: 'app/expenses/index.html',
          controller: 'ExpensesCtrl',
          controllerAs: 'ctrl'
        })
        .state('expense', {
          url: '/expenses/:id',
          templateUrl: 'expenses/show.html',
          controller: 'ExpensesCtrl',
          controllerAs: 'ctrl'
        });

      $urlRouterProvider.otherwise('/expenses');
    });
})();

