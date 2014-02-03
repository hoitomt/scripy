define(['flight/lib/component'], function(defineComponent) {
  var seedData;
  seedData = function() {
    this.defaultAttrs({
      clearDatabase: '#js-clear-database',
      seedDatabase: '#js-seed-database',
      removeScripPromotions: ''
    });
    this.setHandlers = function() {
      this.select('seedDatabase').on('click', (function(_this) {
        return function() {
          return _this.seedDatabase();
        };
      })(this));
      this.select('removeScripPromotions').on('click', (function(_this) {
        return function() {
          return _this.removeScripPromotions();
        };
      })(this));
      return this.select('clearDatabase').on('click', (function(_this) {
        return function() {
          return _this.trigger('event/daoClearDatabase');
        };
      })(this));
    };
    this.getDataFile = function(fileNameUrl) {
      return $.get(fileNameUrl, function(data) {
        return console.log("Data ", data);
      });
    };
    this.seedDatabase = function(ev, data) {
      var scripData, _i, _len;
      console.log("Seed");
      scripData = this.getDataFile('data/2013_2014_scrip.json');
      for (_i = 0, _len = scripData.length; _i < _len; _i++) {
        data = scripData[_i];
        this.trigger('event/daoSaveScripPromotion', data);
      }
    };
    this.removeScripPromotions = function(ev, data) {
      console.log("Remove only scrip promotions");
      return this.trigger('event/daoRemoveScripPromotion', {
        key: 'test25'
      });
    };
    return this.after('initialize', function() {
      return this.setHandlers();
    });
  };
  return defineComponent(seedData);
});
