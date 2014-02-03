define [
  'initialize_facebook',
  'user',
  'data/seed_data',
  'ui/seed_data',
  'data/scrip_promotion_dao',
  'parse',
], (
  InitializeFacebook,
  User,
  SeedData,
  SeedDataUi,
  ScripPromotionDao
) ->

  init = ->
    Parse.initialize("wfX72P5SsvoZNIyzskm30JS3KSmeztH0k1I10bFy", "82FZvofYqRM4d4OvOQLjwoSZT50JhB037nZIYZB6")
    SeedData.attachTo document
    SeedDataUi.attachTo document
    ScripPromotionDao.attachTo document

    $ ->

  return {
    init: ->
      init()
  }