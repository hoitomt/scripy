define [
  'parse'
], () ->
  UserPromotion = Parse.Object.extend "UserPromotions", {
    # Instance Methods
  }, {
    create: (attrs) ->
      new UserPromotion(attrs)
    allByUserId: (userId) ->
      query = new Parse.Query(UserPromotion)
      query.equalTo('user_id', userId)
      return query
  }

  return UserPromotion
