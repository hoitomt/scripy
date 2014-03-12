define(['flight/lib/component', 'persistence/user_promotion'], function(defineComponent, PersistUserPromotion) {
  var userPromotion;
  userPromotion = function() {
    this.defaultAttrs;
    this.createUserPromotion = function(event, data) {
      var attrs, up;
      console.log("Create User Promo", data);
      attrs = {
        'user_id': data.userId,
        'promotion_id': data.promotionId
      };
      up = PersistUserPromotion.create(attrs);
      return up.save().then((function(_this) {
        return function(userPromotion) {
          return _this.trigger('event/userPromotionSaveSuccess', userPromotion);
        };
      })(this), (function(_this) {
        return function(error) {
          return _this.trigger('event/userPromotionSaveError', error);
        };
      })(this));
    };
    return this.after('initialize', function() {
      return this.on('event/addPromotionToAccount', this.createUserPromotion);
    });
  };
  return defineComponent(userPromotion);
});
