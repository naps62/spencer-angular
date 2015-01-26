(function() {
  'use strict';

  angular
    .module('spencer')
    .directive('accordion', function() {
      return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: 'app/components/accordion/accordion.html',
        controller: 'AccordionCtrl'
      };
    })
  
  .directive('accordionItem', function() {
    return {
      require: '^accordion',
      restrict: 'E',
      transclude: true,
      replace: true,
      controller: function($scope) {
        this.toggle = function() {
          $scope.toggle();
        };
      },
      scope: {
        isOpen: '=?'
      },
      templateUrl: 'app/components/accordion/accordionItem.html',
      link: function($scope, element, attrs, accordionCtrl) {
        accordionCtrl.addGroup($scope);

        $scope.toggle = function toggle() {
          $scope.isOpen = !$scope.isOpen;
        };

        $scope.close = function close() {
          $scope.isOpen = false;
        };

        $scope.open = function open() {
          $scope.isOpen = true;
        };

        $scope.$watch('isOpen', function(value) {
          if (value) {
            accordionCtrl.closeOthers($scope);
          }
        });

        $scope.accordionItemClass = function() {
          return $scope.isOpen ? 'AccordionItem--open' : 'AccordionItem--closed';
        };
      }
    };
  })

  .directive('accordionHeader', function() {
    return {
      require: '^accordionItem',
      restrict: 'E',
      transclude: true,
      replace: true,
      templateUrl: 'app/components/accordion/accordionHeader.html',
      link: function($scope, elem, attrs, accordionItemCtrl) {
        $scope.toggle = function() {
          accordionItemCtrl.toggle();
        };
      }
    };
  })

  .directive('accordionContent', function() {
    return {
      restrict: 'E',
      transclude: true,
      replace: true,
      templateUrl: 'app/components/accordion/accordionContent.html'
    };
  });
})();
