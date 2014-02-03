define(['flight/lib/component'], function(defineComponent) {
  var scripSearch;
  scripSearch = function() {
    this.defaultAttrs;
    this.populateList = function(ev, data) {
      var k, scripPromotion, _ref;
      _ref = data.scripPromotions;
      for (k in _ref) {
        scripPromotion = _ref[k];
        this.$node.append(this._listElement(scripPromotion));
      }
      this.$node.listview('refresh');
      return this.$node.trigger('updateLayout');
    };
    this._listElement = function(scripPromotion) {
      var classAttr, key, li, link, text;
      key = scripPromotion.key;
      text = "" + scripPromotion.business + " $" + scripPromotion.denomination;
      classAttr = "class=\"ui-screen-hidden\"";
      link = "href=\"scrip_promotions/show.html?id=" + key + "\"";
      return li = "<li " + classAttr + "><a " + link + ">" + text + "</a></li>";
    };
    return this.after('initialize', function() {
      this.on(document, 'event/scripPromotionsRetrieved', this.populateList);
      return $(document).trigger('event/retrieveScripPromotions');
    });
  };
  return defineComponent(scripSearch);
});
