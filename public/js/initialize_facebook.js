define(['flight/lib/component'], function(defineComponent) {
  var initializeFacebook;
  initializeFacebook = function() {
    this.initializeFacebookScript = function() {
      return FB.Event.subscribe('auth.authResponseChange', function(response) {
        if (response.status === 'connected') {
          return console.log("Logged In");
        } else {
          return FB.login();
        }
      });
    };
    this.logInWithFacebook = function() {
      return $('#js-fb-login').on('click', (function(_this) {
        return function() {
          return _this.fbFlow();
        };
      })(this));
    };
    this.fbFlow = function() {
      return Parse.FacebookUtils.logIn(null, {
        success: function(user) {
          if (!user.existed()) {
            return console.log("Userx has signed up and logged in through facebook");
          } else {
            return console.log("User has logged in through facebook");
          }
        },
        error: (function(_this) {
          return function(user, error) {
            return console.log("User Cancelled");
          };
        })(this)
      });
    };
    return this.after('initialize', function() {
      return this.initializeFacebookScript();
    });
  };
  return defineComponent(initializeFacebook);
});
