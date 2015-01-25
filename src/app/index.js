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
        .state('new_expense', {
          url: '/expenses/new',
          templateUrl: 'app/expenses/new.html',
          controller: 'NewExpenseCtrl',
          controllerAs: 'ctrl'
        })
        .state('days', {
          url: '/days',
          templateUrl: 'app/days/index.html',
          controller: 'DaysCtrl',
          controllerAsl: 'ctrl'
        });

      $urlRouterProvider.otherwise('/days');
    });
})();

