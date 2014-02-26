define [
  'flight/lib/component',
  'jquery-cookie'
], (
  defineComponent
) ->

  user = ->
    @defaultAttrs

    @login = (profile) ->
      @setLoginCookie(profile.auth_source_id)

    @setLoginCookie = (cookieValue) ->
      $.cookie('scripy_ua', cookieValue)

    @userData = (data) ->
      'first_name': data.first_name
      'last_name': data.last_name
      'auth_source_id': data.id

    @handleLogin = (event, data) ->
      console.log "User Handle Login", data
      @login(@userData(data))

    @after 'initialize', ->
      @on document, 'successfulLogin', @handleLogin

  defineComponent user