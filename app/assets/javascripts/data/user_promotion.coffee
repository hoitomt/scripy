define [
  'flight/lib/component',
  'persistence/user_promotion'
], (
  defineComponent,
  PersistUserPromotion
) ->

  userPromotion = ->
    @defaultAttrs

    @createUserPromotion = (event, data) ->
      console.log "Create User Promo", data
      attrs =
        'user_id': data.userId
        'promotion_id': data.promotionId
      up = PersistUserPromotion.create(attrs)
      up.save().then (userPromotion) =>
        @trigger 'event/userPromotionSaveSuccess', userPromotion
      , (error) =>
        @trigger 'event/userPromotionSaveError', error

    @after 'initialize', ->
      @on 'event/addPromotionToAccount', @createUserPromotion

  defineComponent userPromotion