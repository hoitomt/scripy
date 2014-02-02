module.exports = ->

  init = ->
    @initializeFacebook()
    @logInWithFacebook()

  initializeFacebook = ->
    window.fbAsyncInit = ->
      Parse.FacebookUtils.init
        appId: "551368024959921"
        status: true
        cookie: true
        xfbml: true

      FB.getLoginStatus (response) ->
        if (response.status == 'connected')
          console.log("FB Connected")
          # user logged in and linked to app
          # handle this case HERE
      return
    return

  logInWithFacebook = ->
    $('#js-fb-login').on 'click', =>
      @fbFlow()

  fbFlow = ->
    Parse.FacebookUtils.logIn null,
      success: (user) ->
        if not user.existed()
          console.log "Userx has signed up and logged in through facebook"
        else
          console.log "User has logged in through facebook"
      error: (user, error) =>
        console.log "User Cancelled"
        @logError(user, error)

  init()