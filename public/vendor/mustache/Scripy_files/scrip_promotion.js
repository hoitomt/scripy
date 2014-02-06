define(['flight/lib/component'], function(defineComponent) {
  var scripPromotion;
  scripPromotion = function() {
    this.defaultAttrs;
    this.getScripData = function(ev, data) {
      console.log("Scrip Promotion - Get Scrip Data", data);
      return $(document).trigger('event/retrieveScripPromotion', data.key);
    };
    this.updateUi = function(ev, data) {
      return console.log("Update UI", data);
    };
    return this.after('initialize', function() {
      console.log("Initialize Scrip Promotions", this.attr);
      this.on(document, 'event/scripDetailSelected', this.getScripData);
      return this.on(document, 'event/scripPromotionRetrieved', this.updateUi);
    });
  };
  return defineComponent(scripPromotion);
});
