define [
  'initialize_facebook',
  'user',
  'data/seed_data',
  'data/scrip_promotion_dao',
  'ui/seed_data',
  'ui/scrip_search'
  'parse',
], (
  InitializeFacebook,
  User,
  SeedData,
  ScripPromotionDao,
  SeedDataUi,
  ScripSearchUi
) ->

  init = ->
    Parse.initialize("wfX72P5SsvoZNIyzskm30JS3KSmeztH0k1I10bFy", "82FZvofYqRM4d4OvOQLjwoSZT50JhB037nZIYZB6")
    SeedData.attachTo document
    SeedDataUi.attachTo document
    ScripPromotionDao.attachTo document

    $ ->
      ScripSearchUi.attachTo '#js-scrip-search'

  return {
    init: ->
      init()
  }