define [
  'flight/lib/component'
], (
  defineComponent
) ->

  scripSearch = ->
    @defaultAttrs

    @populateList = (ev, data) ->
      for k, scripPromotion of data.scripPromotions
        @$node.append(@_listElement(scripPromotion))
      @$node.listview('refresh')
      @$node.trigger('updateLayout')

    @_listElement = (scripPromotion) ->
      key = scripPromotion.key
      text = "#{scripPromotion.business} $#{scripPromotion.denomination}"
      classAttr = "class=\"ui-screen-hidden\""
      link = "href=\"scrip_promotions/show.html?id=#{key}\""
      li = "<li #{classAttr}><a #{link}>#{text}</a></li>"

    @after 'initialize', ->
      @on document, 'event/scripPromotionsRetrieved', @populateList
      $(document).trigger 'event/retrieveScripPromotions'

  defineComponent scripSearch