define(['initialize_facebook', 'user', 'data/seed_data', 'data/scrip_promotion_dao', 'ui/seed_data', 'ui/scrip_search', 'ui/scrip_promotion', 'parse'], function(InitializeFacebook, User, SeedData, ScripPromotionDao, UiSeedData, UiScripSearch, UiScripPromotion) {
  var init;
  init = function() {
    Parse.initialize("wfX72P5SsvoZNIyzskm30JS3KSmeztH0k1I10bFy", "82FZvofYqRM4d4OvOQLjwoSZT50JhB037nZIYZB6");
    SeedData.attachTo(document);
    UiSeedData.attachTo(document);
    ScripPromotionDao.attachTo(document);
    $(document).on('pagecontainershow', function() {
      return UiScripPromotion.attachTo("li.js-scrip-detail");
    });
    $(document).on("pagecontainertransition", function(event, ui) {
      return console.log("Page transition event");
    });
    return $(function() {
      return UiScripSearch.attachTo('#js-scrip-search');
    });
  };
  return {
    init: function() {
      return init();
    }
  };
});
