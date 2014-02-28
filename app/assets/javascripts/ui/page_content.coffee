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

    @initPageContent = ->
      if @loggedIn()
        @select('loginLinks').hide()
        @select('contentLinks').show()
      else
        @select('loginLinks').show()
        @select('contentLinks').hide()

    @loggedIn = ->
      $.cookie(@attr.userCookieKey)?

    @handleLogout = (ev, data) ->
      console.log "Handle Logout"
      @select('loginLinks').show()
      @select('contentLinks').hide()

    @handleLogin = (ev, data) ->
      console.log "Handle Login"
      @select('loginLinks').hide()
      @select('contentLinks').show()

    @after 'initialize', ->
      @initPageContent()
      @on document, 'logout', @handleLogout
      @on document, 'successfulLogin', @handleLogin

  defineComponent pageContent