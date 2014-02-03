define [
  'flight/lib/component'
], (
  defineComponent
) ->

  seedData = ->
    @defaultAttrs
      clearDatabase: '#js-clear-database',
      seedDatabase: '#js-seed-database'

    @setHandlers = (ev, data) ->
      @select('seedDatabase').on 'click', =>
        @trigger 'event/seedDatabase'

      @select('clearDatabase').on 'click', =>
        @trigger 'event/daoClearDatabase'

    @after 'initialize', ->
      @setHandlers()

  defineComponent seedData