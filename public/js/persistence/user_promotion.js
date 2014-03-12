define(['parse'], function() {
  var UserPromotion;
  UserPromotion = Parse.Object.extend("UserPromotions", {}, {
    create: function(attrs) {
      return new UserPromotion(attrs);
    },
    allByUserId: function(userId) {
      var query;
      query = new Parse.Query(UserPromotion);
      query.equalTo('user_id', userId);
      return query;
    }
  });
  return UserPromotion;
});
