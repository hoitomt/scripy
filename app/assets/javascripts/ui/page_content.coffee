define [
  'flight/lib/component',
  'jquery-cookie'
], (
  defineComponent
) ->

  pageContent = ->
    @defaultAttrs
      contentLinks: '.js-content-links'
      loginLinks: '.js-login-links'
      userCookieKey: 'scripy_ua'

    @handleLogout = (ev, data) ->
      console.log "Handle Logout"
      @select('loginLinks').show()
      @select('contentLinks').hide()

    @handleLogin = (ev, data) ->
      console.log "Handle Login"
      @select('loginLinks').hide()
      @select('contentLinks').show()

    @after 'initialize', ->
      @on document, 'logout', @handleLogout
      @on document, 'successfulLogin', @handleLogin

  defineComponent pageContent