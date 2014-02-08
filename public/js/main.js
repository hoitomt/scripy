define(['authentication', 'user', 'data/seed_data', 'data/scrip_promotion_dao', 'ui/seed_data', 'ui/scrip_search', 'ui/scrip_promotion', 'parse'], function(Authentication, User, SeedData, ScripPromotionDao, UiSeedData, UiScripSearch, UiScripPromotion) {
  var init;
  init = function() {
    Parse.initialize("wfX72P5SsvoZNIyzskm30JS3KSmeztH0k1I10bFy", "82FZvofYqRM4d4OvOQLjwoSZT50JhB037nZIYZB6");
    SeedData.attachTo(document);
    UiSeedData.attachTo(document);
    ScripPromotionDao.attachTo(document);
    return $(function() {
      UiScripSearch.attachTo('#js-scrip-search');
      UiScripPromotion.attachTo('#detail-page');
      return Authentication.attachTo('#social-login-links');
    });
  };
  return {
    init: function() {
      return init();
    }
  };
});
