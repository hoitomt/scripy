define(['flight/lib/component'], function(defineComponent) {
  var scripPromotion;
  scripPromotion = function() {
    this.defaultAttrs({
      template: ''
    });
    this.getTemplate = function() {
      return this.attr.template = this.$node.html();
    };
    this.getScripData = function(ev, data) {
      console.log("Scrip Promotion - Get Scrip Data", data);
      return $(document).trigger('event/retrieveScripPromotion', data.key);
    };
    this.updateUi = function(ev, data) {
      var rendered;
      scripPromotion = data.scripPromotion;
      console.log("Update UI", data.scripPromotion);
      rendered = Mustache.render(this.attr.template, scripPromotion.toJson());
      return this.$node.html(rendered);
    };
    return this.after('initialize', function() {
      console.log("Initialize Scrip Promotions", this.attr);
      this.getTemplate();
      this.on(document, 'event/scripDetailSelected', this.getScripData);
      return this.on(document, 'event/scripPromotionRetrieved', this.updateUi);
    });
  };
  return defineComponent(scripPromotion);
});