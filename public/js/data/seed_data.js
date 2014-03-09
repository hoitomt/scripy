define(['flight/lib/component', 'persistence/scrip_promotion'], function(defineComponent, PersistPromotion) {
  var seedData;
  seedData = function() {
    this.defaultAttrs;
    this.seedDatabase = function(ev, data) {
      var query;
      console.log("Seed the Database");
      query = PersistPromotion.all(window.timePeriod);
      return query.find().then((function(_this) {
        return function(results) {
          if ((results != null) && results.length > 0) {
            return _this.saveRecords(results);
          } else {
            return _this.promotionError("No Results");
          }
        };
      })(this), (function(_this) {
        return function(error) {
          return _this.promotionError(error);
        };
      })(this));
    };
    this.promotionError = function(error) {
      return alert("Error when trying to find a user " + error);
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
