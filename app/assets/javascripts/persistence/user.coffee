define [
  'parse',
  'jquery-cookie'
], () ->
  User = Parse.Object.extend "ScripyUsers", {
    # Instance Methods
    testLog: ->
      console.log "Test"
  }, {
    # Class Methods
    create: (attrs) ->
      user = new User()
      user.save attrs, {
        success: (user) ->
          $.cookie(window.userIdCookie, user.id)
        error: (user, error) ->
          alert "There was an error saving the user #{error}"
      }
    # find: (id) ->
    findByAuthId: (authId) ->
      query = new Parse.Query(User)
      query.equalTo('authId', authId)
      return query
  }

  return User
