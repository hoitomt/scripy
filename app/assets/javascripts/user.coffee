define [
  'flight/lib/component'
], (
  defineComponent
) ->

  user = ->

    logError = (user, error) ->
      console.log "Error: " + error.code + " " + error.message

    createAndSaveUser = ->
      user = new Parse.User()
      user.set("username", "my name")
      user.set("password", "my password")
      user.set("email", "my_email@example.com")

      user.signUp null,
        success: (user) ->
          console.log "Nice!"
        error: (user, error) =>
          logError(user, error)

    @after 'initialize', ->

  defineComponent user
