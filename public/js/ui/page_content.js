define(['flight/lib/component', 'jquery-cookie'], function(defineComponent) {
  var pageContent;
  pageContent = function() {
    this.defaultAttrs({
      contentLinks: '.js-content-links',
      loginLinks: '.js-login-links',
      userCookieKey: 'scripy_ua'
    });
    this.handleLogout = function(ev, data) {
      this.select('loginLinks').show();
      return this.select('contentLinks').hide();
    };
    this.handleLogin = function(ev, data) {
      this.select('loginLinks').hide();
      return this.select('contentLinks').show();
    };
    return this.after('initialize', function() {
      this.on(document, 'notLoggedIn', this.handleLogout);
      this.on(document, 'logout', this.handleLogout);
      return this.on(document, 'successfulLogin', this.handleLogin);
    });
  };
  return defineComponent(pageContent);
});
