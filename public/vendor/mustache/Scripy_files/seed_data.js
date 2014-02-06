define(['flight/lib/component'], function(defineComponent) {
  var seedData;
  seedData = function() {
    this.defaultAttrs;
    this.seedDatabase = function(ev, data) {
      var fileNameUrl;
      console.log("Seed the Database");
      fileNameUrl = 'data/2013_2014_scrip.json';
      return $.get(fileNameUrl, (function(_this) {
        return function(data) {
          return _this.saveRecords(data);
        };
      })(this));
    };
    this.saveRecords = function(data) {
      return $(document).trigger('event/daoSaveScripPromotion', {
        data: data
      });
    };
    return this.after('initialize', function() {
      this.on('event/seedDatabase', this.seedDatabase);
      return this.seedDatabase();
    });
  };
  return defineComponent(seedData);
});
