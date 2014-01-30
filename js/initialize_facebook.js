module.exports = function() {
  var fbFlow, init, logInWithFacebook;
  init = function() {
    return this.logInWithFacebook();
  };
  logInWithFacebook = function() {
    return $('#js-fb-login').on('click', (function(_this) {
      return function() {
        return _this.fbFlow();
      };
    })(this));
  };
  fbFlow = function() {
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
          console.log("User Cancelled");
          return _this.logError(user, error);
        };
      })(this)
    });
  };
  return init();
};
