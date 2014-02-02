define [
  'flight/lib/component'
], (
  defineComponent
) ->

  localStorageDao = ->

    @save = ->

    @_key = ->


    @after 'initialize', ->
      @on 'event/daoSave', @save
      @on 'event/daoClear', @clear
      @on 'event/daoEdit', @edit
      @on 'event/daoDelete', @delete

  defineComponent localStorageDao