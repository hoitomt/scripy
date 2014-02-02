define [
  'flight/lib/component'
], (
  defineComponent
) ->

  seedData = ->
    @defaultAttrs
      clearDatabase: '#js-clear-database',
      seedDatabase: '#js-seed-database'

    @setHandlers = ->
      @select('seedDatabase').on 'click', =>
        @trigger 'event/seedDatabase'

      @select('clearDatabase').on 'click', =>
        @trigger 'event/clearDatabase'

    @runIt = ->
      $.get 'data/2013_2014_scrip.json', (data) ->
        console.log "Data ", data

    @seedDatabase = (ev, data) ->
      console.log "Seed"

    @clearDatabase = (ev, data) ->
      console.log "Clear"

    @after 'initialize', ->
      console.log "Initialize Seed Data"
      @setHandlers()
      @on 'event/seedDatabase', @seedDatabase
      @on 'event/clearDatabase', @clearDatabase

  defineComponent seedData