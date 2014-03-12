define(['flight/lib/component', 'jquery-cookie'], function(defineComponent) {
  var scripPromotion;
  scripPromotion = function() {
    this.defaultAttrs({
      addToAccountContainer: ".js-add-promotion-link",
      addToAccount: ".js-add-promotion-to-account",
      successMessageContainer: ".js-add-promotion-success"
    });
    this.getTemplate = function() {
      return this.attr.template = this.$node.html();
    };
    this.setClickHandlers = function() {
      return this.select('addToAccount').on('click', (function(_this) {
        return function(event) {
          var promotionId;
          promotionId = $(event.target).closest('a').data('promotion_id');
          console.log("Promotion Id " + promotionId);
          return _this.addPromotionToAccount(promotionId);
        };
      })(this));
    };
    this.resetAddLink = function() {
      this.select('addToAccountContainer').show();
      return this.select('successMessageContainer').hide();
    };
    this.addPromotionToAccount = function(promotionId) {
      var userId;
      userId = $.cookie(window.userIdCookie);
      this.trigger('startLoading');
      return this.trigger(document, 'event/addPromotionToAccount', {
        userId: userId,
        promotionId: promotionId
      });
    };
    this.addPromotionToAccountSuccess = function(event, data) {
      this.trigger('stopLoading');
      console.log("Event Success", data);
      this.select('addToAccountContainer').hide();
      return this.select('successMessageContainer').show();
    };
    this.addPromotionToAccountError = function(event, data) {
      this.trigger('stopLoading');
      return console.log("Event Error", data);
    };
    this.getScripData = function(ev, data) {
      return $(document).trigger('event/retrieveScripPromotion', data.key);
    };
    this.updateUi = function(ev, data) {
      var rendered;
      scripPromotion = data.scripPromotion;
      rendered = Mustache.render(this.attr.template, scripPromotion.toJson());
      this.$node.html(rendered);
      return this.trigger('event/promotionDetailRendered');
    };
    return this.after('initialize', function() {
      this.getTemplate();
      this.on(document, 'event/scripDetailSelected', this.getScripData);
      this.on(document, 'event/scripPromotionRetrieved', this.updateUi);
      this.on(document, 'event/userPromotionSaveSuccess', this.addPromotionToAccountSuccess);
      this.on(document, 'event/userPromotionSaveError', this.addPromotionToAccountError);
      this.on('event/promotionDetailRendered', this.setClickHandlers);
      return this.on('event/promotionDetailRendered', this.resetAddLink);
    });
  };
  return defineComponent(scripPromotion);
});
