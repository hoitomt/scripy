define(['flight/lib/component', 'jquery-cookie'], function(defineComponent) {
  var user;
  user = function() {
    this.defaultAttrs;
    this.login = function(profile) {
      return this.setLoginCookie(profile.auth_source_id);
    };
    this.setLoginCookie = function(cookieValue) {
      return $.cookie('scripy_ua', cookieValue);
    };
    this.userData = function(data) {
      return {
        'first_name': data.first_name,
        'last_name': data.last_name,
        'auth_source_id': data.id
      };
    };
    this.handleLogin = function(event, data) {
      console.log("User Handle Login", data);
      return this.login(this.userData(data));
    };
    return this.after('initialize', function() {
      return this.on(document, 'successfulLogin', this.handleLogin);
    });
  };
  return defineComponent(user);
});
