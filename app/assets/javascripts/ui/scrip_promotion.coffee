define [
  'flight/lib/component'
], (
  defineComponent
) ->

  scripPromotion = ->

    @setClickHandler = ->
      key = @$node.data('scrip-key')
      @select('a').on 'click', (e) =>
        console.log "that tickles", key

    @getScripData = ->
      $(document).trigger 'event/retrieveScripPromotion', key

    @updateUi = (ev, data) ->
      console.log "Update UI", data

    @after 'initialize', ->
      console.log "Initialize Scrip Promotion", @$node.data('scrip-key')
      @setClickHandler()
      # @on document, 'event/scriptPromotionRetrieved', @updateUi
      # @getScripData()

  defineComponent scripPromotion