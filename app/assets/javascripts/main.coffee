# Workaround for dependencies that want jquery from requirejs
define 'jquery', [], ->
  return jQuery

define [
  'authentication'
  'data/user',
  'data/seed_data',
  'data/scrip_promotion_dao',
  'ui/seed_data',
  'ui/scrip_search'
  'ui/scrip_promotion'
  'parse'
], (
  Authentication
  User,
  SeedData,
  ScripPromotionDao,
  UiSeedData,
  UiScripSearch,
  UiScripPromotion
) ->

  init = ->
    Parse.initialize("wfX72P5SsvoZNIyzskm30JS3KSmeztH0k1I10bFy", "82FZvofYqRM4d4OvOQLjwoSZT50JhB037nZIYZB6")
    SeedData.attachTo document
    UiSeedData.attachTo document
    ScripPromotionDao.attachTo document
    User.attachTo document

    $ ->
      UiScripSearch.attachTo '#js-scrip-search'
      UiScripPromotion.attachTo '#detail-page'
      Authentication.attachTo '#social-login-links'

  return {
    init: ->
      init()
  }