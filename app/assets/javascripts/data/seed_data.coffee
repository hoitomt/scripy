define [
  'flight/lib/component'
], (
  defineComponent
) ->

  seedData = ->
    @defaultAttrs

    @seedDatabase = (ev, data) ->
      fileNameUrl = 'data/2013_2014_scrip.json'
      $.get fileNameUrl, (data) =>
        @saveRecords(data)

    @saveRecords = (data) ->
      for k, record of data
        $(document).trigger 'event/daoSaveScripPromotion', record
      return

    @after 'initialize', ->
      @on 'event/seedDatabase', @seedDatabase

  defineComponent seedData
