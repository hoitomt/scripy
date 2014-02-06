define [
  'flight/lib/component'
], (
  defineComponent
) ->

  scripSearch = ->
    @defaultAttrs
      itemSelector: 'li a'

    @setListHandlers = ->
      @select('itemSelector').on 'click', (ev) ->
        key = $(@).data('scrip-key')
        $(document).trigger 'event/retrieveScripPromotion', key

    @populateList = (ev, data) ->
      for k, scripPromotion of data.scripPromotions
        @$node.append(@_listElement(scripPromotion))
      @$node.listview('refresh')
      @$node.trigger('updateLayout')
      @setListHandlers()

    @_listElement = (scripPromotion) ->
      key = scripPromotion.key
      text = "#{scripPromotion.business} $#{scripPromotion.denomination}"
      classAttr = 'class="ui-screen-hidden js-scrip-detail"'
      link = "href=\"scrip_promotions/show.html\""
      data = "data-scrip-key=\"#{key}\""
      li = "<li #{classAttr} #{data}><a #{link}>#{text}</a></li>"

    @after 'initialize', ->
      @on document, 'event/scripPromotionsRetrieved', @populateList
      $(document).trigger 'event/retrieveScripPromotions'

  defineComponent scripSearch