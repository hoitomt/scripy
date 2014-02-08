define(['flight/lib/component'], function(defineComponent) {
  var authentication;
  authentication = function() {
    this.defaultAttrs({
      googleLoginButton: '#social-login-google',
      twitterLoginButton: '#social-login-twitter',
      fbLoginButton: '#social-login-facebook'
    });
    this.setClickHandlers = function() {
      return this.select('fbLoginButton').on('click', function() {
        console.log("FB Login");
        return hello('facebook').login();
      });
    };
    return this.after('initialize', function() {
      return this.setClickHandlers();
    });
  };
  return defineComponent(authentication);
});
