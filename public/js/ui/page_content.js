define(['flight/lib/component', 'jquery-cookie'], function(defineComponent) {
  var pageContent;
  pageContent = function() {
    this.defaultAttrs({
      contentLinks: '.js-content-links',
      loginLinks: '.js-login-links',
      userCookieKey: 'scripy_ua'
    });
    this.initPageContent = function() {
      if (this.loggedIn()) {
        this.select('loginLinks').hide();
        return this.select('contentLinks').show();
      } else {
        this.select('loginLinks').show();
        return this.select('contentLinks').hide();
      }
    };
    this.loggedIn = function() {
      return $.cookie(this.attr.userCookieKey) != null;
    };
    this.handleLogout = function(ev, data) {
      console.log("Handle Logout");
      this.select('loginLinks').show();
      return this.select('contentLinks').hide();
    };
    this.handleLogin = function(ev, data) {
      console.log("Handle Login");
      this.select('loginLinks').hide();
      return this.select('contentLinks').show();
    };
    return this.after('initialize', function() {
      this.initPageContent();
      this.on(document, 'logout', this.handleLogout);
      return this.on(document, 'successfulLogin', this.handleLogin);
    });
  };
  return defineComponent(pageContent);
});
