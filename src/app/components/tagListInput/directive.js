(function() {
  'use strict';

  angular
    .module('spencer')
    .directive('tagListInput', function(Tag, _) {
      return {
        restrict: 'E',
        scope: {
          ngModel: '='
        },
        templateUrl: 'app/components/tagListInput/template.html',
        link: function($scope) {
          $scope.allTags = [];
          $scope.ngModel = '';

          Tag.findAll().then(function(tags) {
            $scope.allTags = _.map(tags, function(tag) { return tag.name; });
            $scope.ngModel = $scope.allTags.join(',');
          });

          function currentTagsArray() {
            var array = $scope.ngModel.replace(/\s/g, '').split(',');
            return _.reject(array, function(tag) { return tag.length === 0; });
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

          $scope.toggleTag = function(tagName) {
            if ($scope.isActive(tagName)) {
              removeTag(tagName);
            } else {
              addTag(tagName);
            }
          };

          function removeTag(tagName) {
            $scope.ngModel = _.reject(currentTagsArray(), function(tag) { return tag === tagName; }).join(',');
          }

          function addTag(tagName) {
            var newTags = currentTagsArray();
            newTags.push(tagName);
            $scope.ngModel = newTags.join(',');
          }
        }
      };
    });
})();
