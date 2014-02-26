define [
  'flight/lib/component'
], (
  defineComponent
) ->

  authentication = ->
    @defaultAttrs
      twitterLoginButton: '#social-login-twitter'
      fbLoginButton: '#social-login-facebook'
      hoitomtFacebookApiKey: '247607278754772'
      scripyFacebookApiKey: '551368024959921'

    @initHelloJs = ->
      hello.init
        facebook: @facebookApiKey()
        twitter: '586317858'
      ,
        redirect_uri: 'index.html'

    @facebookApiKey = ->
      if (/hoitomt\.fwd/).test(window.location.href)
        @attr.hoitomtFacebookApiKey
      else
        @attr.scripyFacebookApiKey

    @setClickHandlers = ->
      @select('fbLoginButton').on 'click', ->
        hello('facebook').login()
      @select('twitterLoginButton').on 'click', ->
        hello('twitter').login()

    @handleAuthentication = ->
      hello.on 'auth.login', (auth) =>
        hello(auth.network).api('/me').success (profile) ->
          $(document).trigger('successfulLogin', profile)

    @after 'initialize', ->
      @initHelloJs()
      @setClickHandlers()
      @handleAuthentication()

  defineComponent authentication