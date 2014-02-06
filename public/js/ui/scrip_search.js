define(['flight/lib/component'], function(defineComponent) {
  var scripSearch;
  scripSearch = function() {
    this.defaultAttrs({
      itemSelector: 'li a'
    });
    this.setListHandlers = function() {
      return this.select('itemSelector').on('click', function(ev) {
        var key;
        key = $(this).data('scrip-key');
        return $(document).trigger('event/retrieveScripPromotion', key);
      });
    };
    this.populateList = function(ev, data) {
      var k, scripPromotion, _ref;
      _ref = data.scripPromotions;
      for (k in _ref) {
        scripPromotion = _ref[k];
        this.$node.append(this._listElement(scripPromotion));
      }
      this.$node.listview('refresh');
      this.$node.trigger('updateLayout');
      return this.setListHandlers();
    };
    this._listElement = function(scripPromotion) {
      var classAttr, data, key, li, link, text;
      key = scripPromotion.key;
      text = "" + scripPromotion.business + " $" + scripPromotion.denomination;
      classAttr = 'class="ui-screen-hidden js-scrip-detail"';
      link = "href=\"scrip_promotions/show.html\"";
      data = "data-scrip-key=\"" + key + "\"";
      return li = "<li " + classAttr + " " + data + "><a " + link + ">" + text + "</a></li>";
    };
    return this.after('initialize', function() {
      this.on(document, 'event/scripPromotionsRetrieved', this.populateList);
      return $(document).trigger('event/retrieveScripPromotions');
    });
  };
  return defineComponent(scripSearch);
});
