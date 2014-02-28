define(['flight/lib/component'], function(defineComponent) {
  var authentication;
  authentication = function() {
    this.defaultAttrs({
      hoitomtFacebookApiKey: '247607278754772',
      scripyFacebookApiKey: '551368024959921'
    });
    this.initHelloJs = function() {
      return hello.init({
        facebook: this.facebookApiKey(),
        twitter: '586317858'
      }, {
        redirect_uri: 'index.html'
      });
    };
    this.facebookApiKey = function() {
      if (/hoitomt\.fwd/.test(window.location.href)) {
        return this.attr.hoitomtFacebookApiKey;
      } else {
        return this.attr.scripyFacebookApiKey;
      }
    };
    this.login = function(event, data) {
      return hello(data.client).login();
    };
    this.handleAuthentication = function() {
      return hello.on('auth.login', (function(_this) {
        return function(auth) {
          return hello(auth.network).api('/me').success(function(profile) {
            return _this.trigger('successfulLogin', profile);
          }).error(function() {
            return _this.trigger('logout');
          });
        };
      })(this));
    };
    return this.after('initialize', function() {
      this.initHelloJs();
      this.handleAuthentication();
      return this.on('clickLoginLink', this.login);
    });
  };
  return defineComponent(authentication);
});
