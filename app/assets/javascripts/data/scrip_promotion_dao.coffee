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

    @retrieveScripPromotions = (ev, data) ->
      rawScripPromotions = @all(@attr.key)
      scripPromotions = JSON.parse(rawScripPromotions)
      @trigger 'event/scripPromotionsRetrieved', scripPromotions: scripPromotions

    @after 'initialize', ->
      @on 'event/daoSaveScripPromotion', @saveScripPromotion
      @on 'event/retrieveScripPromotions', @retrieveScripPromotions

  defineComponent scripPromotion, dao