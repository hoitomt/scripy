define(['flight/lib/component'], function(defineComponent) {
  var seedData;
  seedData = function() {
    this.defaultAttrs({
      clearDatabase: '#js-clear-database',
      seedDatabase: '#js-seed-database'
    });
    this.setHandlers = function(ev, data) {
      this.select('seedDatabase').on('click', (function(_this) {
        return function() {
          return _this.trigger('event/seedDatabase');
        };
      })(this));
      return this.select('clearDatabase').on('click', (function(_this) {
        return function() {
          return _this.trigger('event/daoClearDatabase');
        };
      })(this));
    };
    return this.after('initialize', function() {
      return this.setHandlers();
    });
  };
  return defineComponent(seedData);
});
