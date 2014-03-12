define [
  'flight/lib/component',
  'data/local_storage_dao',
  'value_objects/scrip_promotion'
], (
  defineComponent,
  dao,
  ScripPromotion
) ->

  scripPromotion = ->
    @defaultAttrs
      key: 'scripPromotions'

    @_key = (data) ->
      key = '' + data.time_period + data.business + data.denomination
      removeMe = /[^0-9A-Za-z]+/g
      key = key.replace(removeMe, '')

    @saveScripPromotion = (ev, records) ->
      data = records.data
      persistData = {}
      for k, record of data
        key = @_key(record.attributes)
        record.attributes.key = key
        values = record.attributes
        values['id'] = record.id
        persistData[key] = values
      @save(@attr.key, persistData)

    @scripPromotions = ->
      rawScripPromotions = @all(@attr.key)
      JSON.parse(rawScripPromotions)

    @scripPromotionsObj = ->
      result = {}
      for k, scripPromotion of @scripPromotions()
        result[scripPromotion.key] = scripPromotion
      return result

    @retrieveScripPromotions = (ev, data) ->
      @trigger 'event/scripPromotionsRetrieved', scripPromotions: @scripPromotions()

    @retrieveScripPromotion = (ev, data) ->
      scripPromotion = @scripPromotionsObj()[data]
      @trigger 'event/scripPromotionRetrieved', scripPromotion: new ScripPromotion(scripPromotion)

    @after 'initialize', ->
      @on 'event/daoSaveScripPromotion', @saveScripPromotion
      @on 'event/retrieveScripPromotions', @retrieveScripPromotions
      @on 'event/retrieveScripPromotion', @retrieveScripPromotion

  defineComponent scripPromotion, dao