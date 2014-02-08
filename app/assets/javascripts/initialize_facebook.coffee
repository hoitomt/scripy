define [
  'flight/lib/component'
], (
  defineComponent
) ->

  initializeFacebook = ->

    @initializeFacebookScript = ->
      FB.Event.subscribe 'auth.authResponseChange', (response) ->
        if response.status is 'connected'
          console.log "Logged In"
        else
          FB.login()

    @logInWithFacebook = ->
      $('#js-fb-login').on 'click', =>
        @fbFlow()

    @fbFlow = ->
      Parse.FacebookUtils.logIn null,
        success: (user) ->
          if not user.existed()
            console.log "Userx has signed up and logged in through facebook"
          else
            console.log "User has logged in through facebook"
        error: (user, error) =>
          console.log "User Cancelled"

    @after 'initialize', ->
      @initializeFacebookScript()
      # @logInWithFacebook()

  defineComponent initializeFacebook