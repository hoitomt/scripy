define [
  'flight/lib/component',
  'persistence/scrip_promotion'
], (
  defineComponent,
  PersistPromotion
) ->

  seedData = ->
    @defaultAttrs

    @seedDatabase = (ev, data) ->
      console.log "Seed the Database"
      query = PersistPromotion.all(window.timePeriod)
      query.find().then (results) =>
        if results? and results.length > 0
          @saveRecords(results)
        else
          @promotionError("No Results")
      , (error) =>
        @promotionError(error)

    @promotionError = (error) ->
      alert "Error when trying to find a user #{error}"

    @saveRecords = (data) ->
      $(document).trigger 'event/daoSaveScripPromotion', data: data

    @after 'initialize', ->
      @on 'event/seedDatabase', @seedDatabase
      @seedDatabase()

  defineComponent seedData
