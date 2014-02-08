define [
  'flight/lib/component'
], (
  defineComponent
) ->

  authentication = ->
    @defaultAttrs
      googleLoginButton: '#social-login-google'
      twitterLoginButton: '#social-login-twitter'
      fbLoginButton: '#social-login-facebook'

    @initHelloJs = ->
      hello.init
        facebook: '551368024959921'
      ,
        redirect_uri: 'index.html'

    # hello.init({
    #   facebook : FACEBOOK_CLIENT_ID,
    #   windows  : WINDOWS_CLIENT_ID,
    #   google   : GOOGLE_CLIENT_ID
    # },{redirect_uri:'redirect.html'});

    @setClickHandlers = ->
      @select('fbLoginButton').on 'click', ->
        console.log "FB Login"
        hello( 'facebook' ).login()

    @after 'initialize', ->
      @initHelloJs()
      @setClickHandlers()

  defineComponent authentication