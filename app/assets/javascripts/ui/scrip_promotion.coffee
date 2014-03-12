define [
  'flight/lib/component',
  'jquery-cookie'
], (
  defineComponent
) ->

  scripPromotion = ->
    @defaultAttrs
      addToAccountContainer: ".js-add-promotion-link"
      addToAccount: ".js-add-promotion-to-account"
      successMessageContainer: ".js-add-promotion-success"

    @getTemplate = ->
      @attr.template = @$node.html()

    @setClickHandlers = ->
      @select('addToAccount').on 'click', (event) =>
        promotionId = $(event.target).closest('a').data('promotion_id')
        console.log "Promotion Id #{promotionId}"
        @addPromotionToAccount(promotionId)

    @resetAddLink = ->
      @select('addToAccountContainer').show()
      @select('successMessageContainer').hide()

    @addPromotionToAccount = (promotionId) ->
      userId = $.cookie(window.userIdCookie)
      @trigger 'startLoading'
      @trigger document, 'event/addPromotionToAccount', {userId: userId, promotionId: promotionId}

    @addPromotionToAccountSuccess = (event, data) ->
      @trigger 'stopLoading'
      console.log "Event Success", data
      @select('addToAccountContainer').hide()
      @select('successMessageContainer').show()

    @addPromotionToAccountError = (event, data) ->
      @trigger 'stopLoading'
      console.log "Event Error", data

    @getScripData = (ev, data) ->
      $(document).trigger 'event/retrieveScripPromotion', data.key

    @updateUi = (ev, data) ->
      scripPromotion = data.scripPromotion
      rendered = Mustache.render(@attr.template, scripPromotion.toJson())
      @$node.html(rendered)
      @trigger 'event/promotionDetailRendered'

    @after 'initialize', ->
      @getTemplate()
      @on document, 'event/scripDetailSelected', @getScripData
      @on document, 'event/scripPromotionRetrieved', @updateUi
      @on document, 'event/userPromotionSaveSuccess', @addPromotionToAccountSuccess
      @on document, 'event/userPromotionSaveError', @addPromotionToAccountError
      @on 'event/promotionDetailRendered', @setClickHandlers
      @on 'event/promotionDetailRendered', @resetAddLink

  defineComponent scripPromotion