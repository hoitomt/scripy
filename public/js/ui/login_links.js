define(['flight/lib/component'], function(defineComponent) {
  var loginLinks;
  loginLinks = function() {
    this.defaultAttrs({
      fbLoginButton: '#social-login-facebook',
      twitterLoginButton: '#social-login-twitter'
    });
    this.setClickHandlers = function() {
      this.select('fbLoginButton').on('click', function() {
        return $(document).trigger('clickLoginLink', {
          client: 'facebook'
        });
      });
      return this.select('twitterLoginButton').on('click', function() {
        return $(document).trigger('clickLoginLink', {
          client: 'twitter'
        });
      });
    };
    return this.after('initialize', function() {
      return this.setClickHandlers();
    });
  };
  return defineComponent(loginLinks);
});
