define [
  'flight/lib/component',
  'data/local_storage_dao'
], (
  defineComponent,
  dao
) ->

  scripPromotion = ->
    @defaultAttrs
      key: 'scripPromotions'

    @_key = (data) ->
      key = '' + data.business + data.denomination
      removeMe = /\'|\s|\//g
      key = key.replace(removeMe, '')

    @saveScripPromotion = (ev, records) ->
      data = records.data
      for k, record of data
        record.key = @_key(record)
      @save(@attr.key, data)

    @scripPromotions = ->
      rawScripPromotions = @all(@attr.key)
      JSON.parse(rawScripPromotions)

    @scripPromotionsObj = ->
      result = {}
      for scripPromotion in @scripPromotions()
        result[scripPromotion.key] = scripPromotion
      return result

    @retrieveScripPromotions = (ev, data) ->
      @trigger 'event/scripPromotionsRetrieved', scripPromotions: @scripPromotions()

    @retrieveScripPromotion = (ev, data) ->
      console.log "retrieveScripPromotion", data
      scripPromotion = @scripPromotionsObj()[data]
      console.log "scripPromotionRetrieved", scripPromotion
      $(document).trigger 'event/scripPromotionRetrieved', data: scripPromotion

    @after 'initialize', ->
      @on 'event/daoSaveScripPromotion', @saveScripPromotion
      @on 'event/retrieveScripPromotions', @retrieveScripPromotions
      @on 'event/retrieveScripPromotion', @retrieveScripPromotion

  defineComponent scripPromotion, dao