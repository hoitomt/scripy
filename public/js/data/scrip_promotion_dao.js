define(['flight/lib/component', 'data/local_storage_dao'], function(defineComponent, dao) {
  var scripPromotion;
  scripPromotion = function() {
    this.defaultAttrs({
      key: 'scripPromotions'
    });
    this._key = function(data) {
      var key, removeMe;
      key = '' + data.business + data.denomination;
      removeMe = /\'|\s|\//g;
      return key = key.replace(removeMe, '');
    };
    this.saveScripPromotion = function(ev, records) {
      var data, k, record;
      data = records.data;
      for (k in data) {
        record = data[k];
        record.key = this._key(record);
      }
      return this.save(this.attr.key, data);
    };
    this.scripPromotions = function() {
      var rawScripPromotions;
      rawScripPromotions = this.all(this.attr.key);
      return JSON.parse(rawScripPromotions);
    };
    this.scripPromotionsObj = function() {
      var result, _i, _len, _ref;
      result = {};
      _ref = this.scripPromotions();
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        scripPromotion = _ref[_i];
        result[scripPromotion.key] = scripPromotion;
      }
      return result;
    };
    this.retrieveScripPromotions = function(ev, data) {
      return this.trigger('event/scripPromotionsRetrieved', {
        scripPromotions: this.scripPromotions()
      });
    };
    this.retrieveScripPromotion = function(ev, data) {
      console.log("retrieveScripPromotion", data);
      scripPromotion = this.scripPromotionsObj()[data];
      console.log("scripPromotionRetrieved", scripPromotion);
      return $(document).trigger('event/scripPromotionRetrieved', {
        data: scripPromotion
      });
    };
    return this.after('initialize', function() {
      this.on('event/daoSaveScripPromotion', this.saveScripPromotion);
      this.on('event/retrieveScripPromotions', this.retrieveScripPromotions);
      return this.on('event/retrieveScripPromotion', this.retrieveScripPromotion);
    });
  };
  return defineComponent(scripPromotion, dao);
});
