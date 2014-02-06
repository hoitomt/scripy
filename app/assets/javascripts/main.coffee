define [
  'initialize_facebook',
  'user',
  'data/seed_data',
  'data/scrip_promotion_dao',
  'ui/seed_data',
  'ui/scrip_search'
  'ui/scrip_promotion',
  'parse',
], (
  InitializeFacebook,
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

    $(document).on 'pagecontainershow', ->
      UiScripPromotion.attachTo "li.js-scrip-detail"

    $(document).on "pagecontainertransition", (event, ui) ->
      console.log "Page transition event"

    $ ->
      UiScripSearch.attachTo '#js-scrip-search'

  return {
    init: ->
      init()
  }