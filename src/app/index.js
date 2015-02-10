(function() {
  'use strict';

  angular.module('spencer', [
      'ngAnimate',
      'ngCookies',
      'ngTouch',
      'ngSanitize',
      'ui.router',
      'angularMoment',
      'js-data']
    )
    .config(function(Config, DSProvider) {
      DSProvider.defaults.basePath = Config.apiUrl;
    })
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
        });

      $urlRouterProvider.otherwise('/expenses');
    });
})();

