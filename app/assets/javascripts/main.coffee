define [
  'initialize_facebook',
  'seed_data',
  'data/local_storage_dao',
  'user',
  'parse',
], (
  InitializeFacebook,
  SeedData,
  User,
  Dao
) ->

  Parse.initialize("wfX72P5SsvoZNIyzskm30JS3KSmeztH0k1I10bFy", "82FZvofYqRM4d4OvOQLjwoSZT50JhB037nZIYZB6")
  SeedData.attachTo document
  Dao.attachTo document

  $ ->
    console.log "Doc Ready"