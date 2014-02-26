define(['flight/lib/component'], function(defineComponent) {
  var authentication;
  authentication = function() {
    this.defaultAttrs({
      twitterLoginButton: '#social-login-twitter',
      fbLoginButton: '#social-login-facebook',
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
    this.setClickHandlers = function() {
      this.select('fbLoginButton').on('click', function() {
        return hello('facebook').login();
      });
      return this.select('twitterLoginButton').on('click', function() {
        return hello('twitter').login();
      });
    };
    this.handleAuthentication = function() {
      return hello.on('auth.login', (function(_this) {
        return function(auth) {
          return hello(auth.network).api('/me').success(function(profile) {
            return $(document).trigger('successfulLogin', profile);
          });
        };
      })(this));
    };
    return this.after('initialize', function() {
      this.initHelloJs();
      this.setClickHandlers();
      return this.handleAuthentication();
    });
  };
  return defineComponent(authentication);
});
