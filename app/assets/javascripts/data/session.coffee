define [
  'flight/lib/component',
  'jquery-cookie'
], (
  defineComponent
) ->

  session = ->

    @defaultAttrs
      userCookieKey: 'scripy_ua'

    @loggedIn = ->
      $.cookie(@attr.userCookieKey)?

    @logoutUser = ->
      $.removeCookie(@attr.userCookieKey)

    @handleLogin = (event, data) ->
      $.cookie(@attr.userCookieKey, data.id)

    @after 'initialize', ->
      @on 'successfulLogin', @handleLogin
      @on 'logout', @logoutUser


  defineComponent session