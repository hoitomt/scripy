define [
  'flight/lib/component',
  'data/local_storage_dao'
], (
  defineComponent,
  dao
) ->

  scripPromotion = ->

    @_key = (data) ->
      key = '' + data.business + data.denomination
      removeMe = /\'|\s|\//g
      key = key.replace(removeMe, '')

    @saveScripPromotion = (ev, data) ->
      data.key = @_key(data)
      console.log "Saving #{data.key}"
      @save(ev, data)

    @after 'initialize', ->
      console.log "Init scripPromotion"
      @on 'event/daoSaveScripPromotion', @saveScripPromotion

  defineComponent scripPromotion, dao