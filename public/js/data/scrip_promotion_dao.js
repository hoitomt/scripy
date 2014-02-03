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
    this.retrieveScripPromotions = function(ev, data) {
      var rawScripPromotions, scripPromotions;
      rawScripPromotions = this.all(this.attr.key);
      scripPromotions = JSON.parse(rawScripPromotions);
      return this.trigger('event/scripPromotionsRetrieved', {
        scripPromotions: scripPromotions
      });
    };
    return this.after('initialize', function() {
      this.on('event/daoSaveScripPromotion', this.saveScripPromotion);
      return this.on('event/retrieveScripPromotions', this.retrieveScripPromotions);
    });
  };
  return defineComponent(scripPromotion, dao);
});
