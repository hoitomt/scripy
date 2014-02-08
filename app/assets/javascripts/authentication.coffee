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

    @setClickHandlers = ->
      @select('fbLoginButton').on 'click', ->
        console.log "FB Login"
        hello( 'facebook' ).login()

    @after 'initialize', ->
      @setClickHandlers()

  defineComponent authentication