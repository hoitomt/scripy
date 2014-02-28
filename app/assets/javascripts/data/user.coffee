define [
  'flight/lib/component'
], (
  defineComponent
) ->

  user = ->
    @defaultAttrs

    @newUser = (ev, data) ->
      console.log "User Handle login"
      @firstName = data.first_name
      @lastName = data.last_name

    @after 'initialize', ->
      @on 'successfulLogin', @newUser

  defineComponent user