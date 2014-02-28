define [
  'flight/lib/component'
], (
  defineComponent
) ->

  authentication = ->
    @defaultAttrs
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

    @login = (event, data) ->
      hello(data.client).login()

    @handleAuthentication = ->
      hello.on 'auth.login', (auth) =>
        hello(auth.network).api('/me').success (profile) =>
          @trigger 'successfulLogin', profile
        .error =>
          @trigger 'logout'

    @after 'initialize', ->
      @initHelloJs()
      @handleAuthentication()
      @on 'clickLoginLink', @login

  defineComponent authentication