define [
  'flight/lib/component'
], (
  defineComponent
) ->

  spinner = ->

    @startLoading = ->
      $.mobile.loading "show"

    @stopLoading = ->
      $.mobile.loading "hide"

    @after 'initialize', ->
      @on document, 'startLoading', @startLoading
      @on document, 'stopLoading', @stopLoading
      @trigger 'startLoading' # Stop loading after authentication

  defineComponent spinner