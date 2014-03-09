define(['flight/lib/component', 'data/local_storage_dao', 'value_objects/scrip_promotion'], function(defineComponent, dao, ScripPromotion) {
  var scripPromotion;
  scripPromotion = function() {
    this.defaultAttrs({
      key: 'scripPromotions'
    });
    this._key = function(data) {
      var key, removeMe;
      key = '' + data.time_period + data.business + data.denomination;
      removeMe = /[^0-9A-Za-z]+/g;
      return key = key.replace(removeMe, '');
    };
    this.saveScripPromotion = function(ev, records) {
      var data, k, key, persistData, record;
      data = records.data;
      persistData = {};
      for (k in data) {
        record = data[k];
        key = this._key(record.attributes);
        record.attributes.key = key;
        persistData[key] = record.attributes;
      }
      return this.save(this.attr.key, persistData);
    };
    this.scripPromotions = function() {
      var rawScripPromotions;
      rawScripPromotions = this.all(this.attr.key);
      return JSON.parse(rawScripPromotions);
    };
    this.scripPromotionsObj = function() {
      var k, result, _ref;
      result = {};
      _ref = this.scripPromotions();
      for (k in _ref) {
        scripPromotion = _ref[k];
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
      scripPromotion = this.scripPromotionsObj()[data];
      return this.trigger('event/scripPromotionRetrieved', {
        scripPromotion: new ScripPromotion(scripPromotion)
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
