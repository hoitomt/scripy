define [], () ->

  localStorageDao = ->

    @save = (ev, data) ->
      @_functionRunner =>
        localStorage.setItem(data.key, @_stringified(data))

    @edit = (ev, data) ->

    @delete = (ev, data) ->
      @_functionRunner =>
        localStorage.removeItem(key)

    @clearDatabase = (ev, data) ->
      @_functionRunner =>
        localStorage.clear()

    @_functionRunner = (localStorageFunction) ->
      try
        localStorageFunction()
      catch e
        console.log "ERROR #{e.message}"

    @_stringified = (data) ->
      JSON.stringify(data)

    @after 'initialize', ->
      @on 'event/daoClearDatabase', @clearDatabase
