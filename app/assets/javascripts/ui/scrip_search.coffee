define [
  'flight/lib/component',
  'ui/scrip_promotion'
], (
  defineComponent,
  UiScripPromotion
) ->

  scripSearch = ->
    @defaultAttrs
      itemSelector: 'li a'

    @setListHandlers = ->
      @select('itemSelector').on 'click', (ev) ->
        key = $(@).data('scrip-key')
        $(document).trigger 'event/scripDetailSelected', key: key

    @populateList = (ev, data) ->
      for k, scripPromotion of data.scripPromotions
        @$node.append(@_listElement(scripPromotion))
      @$node.trigger('updateLayout')
      @setListHandlers()

    @_listElement = (scripPromotion) ->
      key = scripPromotion.key
      text = "#{scripPromotion.business} $#{scripPromotion.denomination}"
      classAttr = 'class="ui-screen-hidden js-scrip-detail"'
      link = 'href="#detail-page"'
      data = "data-scrip-key=\"#{key}\""
      li = "<li #{classAttr}><a #{link} #{data}>#{text}</a></li>"

    @after 'initialize', ->
      @on document, 'event/scripPromotionsRetrieved', @populateList
      $(document).trigger 'event/retrieveScripPromotions'

  defineComponent scripSearch