(function() {
  'use strict';

  angular.module('spencer', [
      'ngAnimate',
      'ngCookies',
      'ngTouch',
      'ngSanitize',
      'ui.router',
      'angularMoment',
      'js-data',
      'ng-token-auth']
    )
    .config(function(Config, DSProvider) {
      DSProvider.defaults.basePath = Config.apiUrl;
    })
    .config(function (Config, $authProvider) {
      $authProvider.configure({
        apiUrl: Config.apiUrl,
        authProviderPaths: {
          google: '/auth/google_oauth2'
        }
      });
    })
    .config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
      $stateProvider
        .state('auth', {
          url: '/auth',
          templateUrl: 'app/auth/index.html'
        })
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

      $urlRouterProvider.otherwise('/auth');
    });
})();

