window.User =
  init: ->
    @logInWithFacebook()

  logInWithFacebook: ->
    $('#js-fb-login').on 'click', =>
      @fbFlow()

  fbFlow: ->
    Parse.FacebookUtils.logIn null,
      success: (user) ->
        if not user.existed()
          console.log "User has signed up and logged in through facebook"
        else
          console.log "User has logged in through facebook"
      error: (user, error) =>
        console.log "User Cancelled"
        @logError(user, error)

  logError: (user, error) ->
    console.log "Error: " + error.code + " " + error.message


  createAndSaveUser: ->
    user = new Parse.User()
    user.set("username", "my name")
    user.set("password", "my password")
    user.set("email", "my_email@example.com")

    user.signUp null,
      success: (user) ->
        console.log "Nice!"
      error: (user, error) =>
        logError(user, error)
