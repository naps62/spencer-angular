(function() {
  'use strict';

  angular
    .module('spencer')
    .directive('tagListInput', function(Tag) {
      return {
        restrict: 'E',
        scope: {
          ngModel: '='
        },
        templateUrl: 'app/components/tagListInput/template.html',
        link: function($scope) {
          $scope.allTags = [];
          $scope.currentTags = '';

          Tag.query().then(function(tags) {
            $scope.allTags = _.map(tags, function(tag) { return tag.name; });
            $scope.currentTags = $scope.allTags.join(',');
          });

          function currentTagsArray() {
            return $scope.currentTags.replace(/\s/g, '').split(',');
          }

          $scope.isActive = function(tagName) {
            return _.find(currentTagsArray(), function(tag) { return tag === tagName; });
          };

          $scope.tagClass = function(tagName) {
            if ($scope.isActive(tagName)) {
              return 'tag-active';
            } else {
              return null;
            }
          };

          $scope.toggle = function(tagName) {
            if ($scope.isActive(tagName)) {
              $scope.remove(tagName);
            } else {
              $scope.add(tagName);
            }
          };

          $scope.remove = function(tagName) {
            $scope.currentTags = _.reject(currentTagsArray(), function(tag) { return tag === tagName; }).join(',');
          };

          $scope.add = function(tagName) {
            var newTags = currentTagsArray();
            newTags.push(tagName);
            $scope.currentTags = newTags.join(',');
          };
        }
      };
    });
})();
