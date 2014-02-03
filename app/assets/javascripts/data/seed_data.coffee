define [
  'flight/lib/component'
], (
  defineComponent
) ->

  seedData = ->
    @defaultAttrs

    @seedDatabase = (ev, data) ->
      console.log "Seed the Database"
      fileNameUrl = 'data/2013_2014_scrip.json'
      $.get fileNameUrl, (data) =>
        @saveRecords(data)

    @saveRecords = (data) ->
      $(document).trigger 'event/daoSaveScripPromotion', data: data

    @after 'initialize', ->
      @on 'event/seedDatabase', @seedDatabase
      @seedDatabase()

  defineComponent seedData
