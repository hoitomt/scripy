define [
  'flight/lib/component'
], (
  defineComponent
) ->

  loginLinks = ->
    @defaultAttrs
      fbLoginButton: '#social-login-facebook'
      twitterLoginButton: '#social-login-twitter'

    @setClickHandlers = ->
      @select('fbLoginButton').on 'click', ->
        $(document).trigger 'clickLoginLink', client: 'facebook'
      @select('twitterLoginButton').on 'click', ->
        $(document).trigger 'clickLoginLink', client: 'twitter'

    @after 'initialize', ->
      @setClickHandlers()

  defineComponent loginLinks