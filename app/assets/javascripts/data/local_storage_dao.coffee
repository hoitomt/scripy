define [], () ->

  localStorageDao = ->

    @save = (key, data) ->
      @_functionRunner =>
        localStorage.setItem(key, @_stringify(data))

    @edit = (data) ->

    @delete = (data) ->
      @_functionRunner =>
        localStorage.removeItem(key)

    @all = (key) ->
      @_functionRunner =>
        localStorage.getItem(key)

    @clearDatabase = (ev, data) ->
      @_functionRunner =>
        localStorage.clear()

    @_functionRunner = (localStorageFunction) ->
      try
        localStorageFunction()
      catch e
        console.log "ERROR #{e.message}"

    @_stringify = (data) ->
      JSON.stringify(data)

    @after 'initialize', ->
      @on 'event/daoClearDatabase', @clearDatabase
