(function() {
  'use strict';

  angular
    .module('spencer')
    .controller('AccordionCtrl', function() {
      this.items = [];

      this.addGroup = function(groupScope) {
        var that = this;
        this.items.push(groupScope);

        groupScope.$on('$destroy', function(event) {
          that.removeGroup(groupScope);
        });
      };

      this.removeGroup = function(group) {
        var index = this.items.indexOf(group);
        if (index !== -1) {
          this.items.splice(index, 1);
        }
      };

      this.closeOthers = function(openItem) {
        angular.forEach(this.items, function(item) {
          if (item !== openItem) {
            item.close();
          }
        });
      };
    });
})();
