define [
  'flight/lib/component'
], (
  defineComponent
) ->

  scripPromotion = ->
    @defaultAttrs
      template: ''

    @getTemplate = ->
      @attr.template = @$node.html()

    @getScripData = (ev, data) ->
      console.log "Scrip Promotion - Get Scrip Data", data
      $(document).trigger 'event/retrieveScripPromotion', data.key

    @updateUi = (ev, data) ->
      scripPromotion = data.scripPromotion
      console.log "Update UI", data.scripPromotion
      rendered = Mustache.render(@attr.template, scripPromotion.toJson())
      @$node.html(rendered)

    @after 'initialize', ->
      console.log "Initialize Scrip Promotions", @attr
      @getTemplate()
      @on document, 'event/scripDetailSelected', @getScripData
      @on document, 'event/scripPromotionRetrieved', @updateUi

  defineComponent scripPromotion