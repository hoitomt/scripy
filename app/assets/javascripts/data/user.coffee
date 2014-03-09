define [
  'flight/lib/component',
  'persistence/user'
], (
  defineComponent,
  PersistUser
) ->

  user = ->
    @defaultAttrs

    @retrieve = (id) ->

    @dataObject = (data) ->
      firstName: data.first_name
      lastName: data.last_name
      authId: data.id

    @createNewUser = (event, data) ->
      saveSuccess = (user) ->
        $.cookie('parse_user_id', user.id)
      userData = @dataObject(data)
      PersistUser.create(userData)

    @getUser = (ev, data) ->
      @findUser(data)

    @findUser = (data) ->
      query = PersistUser.findByAuthId(data.id)
      query.first().then (user) =>
        if user
          $.cookie('parse_user_id', user.id)
        else
          @trigger 'userNotFound', data
      , (error) =>
        alert "Error when trying to find a user #{error}"

    @after 'initialize', ->
      @on 'successfulLogin', @getUser
      @on 'userNotFound', @createNewUser

  defineComponent user