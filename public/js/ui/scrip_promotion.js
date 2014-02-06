define(['flight/lib/component'], function(defineComponent) {
  var scripPromotion;
  scripPromotion = function() {
    this.setClickHandler = function() {
      var key;
      key = this.$node.data('scrip-key');
      return this.select('a').on('click', (function(_this) {
        return function(e) {
          return console.log("that tickles", key);
        };
      })(this));
    };
    this.getScripData = function() {
      return $(document).trigger('event/retrieveScripPromotion', key);
    };
    this.updateUi = function(ev, data) {
      return console.log("Update UI", data);
    };
    return this.after('initialize', function() {
      console.log("Initialize Scrip Promotion", this.$node.data('scrip-key'));
      return this.setClickHandler();
    });
  };
  return defineComponent(scripPromotion);
});
