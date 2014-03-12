define('jquery', [], function() {
  return jQuery;
});

define(['data/authentication', 'data/user', 'data/seed_data', 'data/scrip_promotion', 'data/session', 'data/user_promotion', 'ui/seed_data', 'ui/scrip_search', 'ui/scrip_promotion', 'ui/login_links', 'ui/page_content', 'ui/spinner', 'parse', 'data/constants'], function(Authentication, User, SeedData, ScripPromotionDao, Session, UserPromotion, UiSeedData, UiScripSearch, UiScripPromotion, UiLoginLinks, UiPageContent, Spinner) {
  var init;
  init = function() {
    Spinner.attachTo(document);
    $(document).trigger('startLoading');
    Parse.initialize("wfX72P5SsvoZNIyzskm30JS3KSmeztH0k1I10bFy", "82FZvofYqRM4d4OvOQLjwoSZT50JhB037nZIYZB6");
    SeedData.attachTo(document);
    UiSeedData.attachTo(document);
    ScripPromotionDao.attachTo(document);
    User.attachTo(document);
    Session.attachTo(document);
    UserPromotion.attachTo(document);
    return $(function() {
      UiScripSearch.attachTo('#js-scrip-search');
      UiScripPromotion.attachTo('#detail-page');
      UiLoginLinks.attachTo('.js-login-links');
      UiPageContent.attachTo('.js-main-content');
      return Authentication.attachTo(document);
    });
  };
  return {
    init: function() {
      return init();
    }
  };
});
