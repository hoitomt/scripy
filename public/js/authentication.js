define(['flight/lib/component'], function(defineComponent) {
  var authentication;
  authentication = function() {
    this.defaultAttrs({
      googleLoginButton: '#social-login-google',
      twitterLoginButton: '#social-login-twitter',
      fbLoginButton: '#social-login-facebook'
    });
    this.initHelloJs = function() {
      return hello.init({
        facebook: '551368024959921'
      }, {
        redirect_uri: 'index.html'
      });
    };
    this.setClickHandlers = function() {
      return this.select('fbLoginButton').on('click', function() {
        console.log("FB Login");
        return hello('facebook').login();
      });
    };
    return this.after('initialize', function() {
      this.initHelloJs();
      return this.setClickHandlers();
    });
  };
  return defineComponent(authentication);
});
