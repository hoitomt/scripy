define(['flight/lib/component'], function(defineComponent) {
  var seedData;
  seedData = function() {
    this.defaultAttrs;
    this.seedDatabase = function(ev, data) {
      var fileNameUrl;
      fileNameUrl = 'data/2013_2014_scrip.json';
      return $.get(fileNameUrl, (function(_this) {
        return function(data) {
          return _this.saveRecords(data);
        };
      })(this));
    };
    this.saveRecords = function(data) {
      var k, record;
      for (k in data) {
        record = data[k];
        $(document).trigger('event/daoSaveScripPromotion', record);
      }
    };
    return this.after('initialize', function() {
      return this.on('event/seedDatabase', this.seedDatabase);
    });
  };
  return defineComponent(seedData);
});
