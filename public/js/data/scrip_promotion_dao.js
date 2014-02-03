define(['flight/lib/component', 'data/local_storage_dao'], function(defineComponent, dao) {
  var scripPromotion;
  scripPromotion = function() {
    this._key = function(data) {
      var key, removeMe;
      key = '' + data.business + data.denomination;
      removeMe = /\'|\s|\//g;
      return key = key.replace(removeMe, '');
    };
    this.saveScripPromotion = function(ev, data) {
      data.key = this._key(data);
      console.log("Saving " + data.key);
      return this.save(ev, data);
    };
    return this.after('initialize', function() {
      console.log("Init scripPromotion");
      return this.on('event/daoSaveScripPromotion', this.saveScripPromotion);
    });
  };
  return defineComponent(scripPromotion, dao);
});
