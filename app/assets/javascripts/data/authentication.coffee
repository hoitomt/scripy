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
        @retrieveFacebookProfile(auth)

    @retrieveFacebookProfile = (auth={network: 'facebook'}) ->
      hello(auth.network).api('/me').success (profile) =>
        @trigger 'stopLoading'
        @trigger 'successfulLogin', profile
      .error =>
        @trigger 'stopLoading'
        @trigger 'notLoggedIn'

    @after 'initialize', ->
      @initHelloJs()
      @retrieveFacebookProfile()
      @handleAuthentication()
      @on 'clickLoginLink', @login

  defineComponent authentication