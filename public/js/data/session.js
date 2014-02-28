define(['flight/lib/component', 'jquery-cookie'], function(defineComponent) {
  var session;
  session = function() {
    this.defaultAttrs({
      userCookieKey: 'scripy_ua'
    });
    this.loggedIn = function() {
      return $.cookie(this.attr.userCookieKey) != null;
    };
    this.logoutUser = function() {
      return $.removeCookie(this.attr.userCookieKey);
    };
    this.handleLogin = function(event, data) {
      return $.cookie(this.attr.userCookieKey, data.id);
    };
    return this.after('initialize', function() {
      this.on('successfulLogin', this.handleLogin);
      return this.on('logout', this.logoutUser);
    });
  };
  return defineComponent(session);
});
