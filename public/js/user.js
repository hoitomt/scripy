define(['flight/lib/component'], function(defineComponent) {
  var user;
  user = function() {
    var createAndSaveUser, logError;
    logError = function(user, error) {
      return console.log("Error: " + error.code + " " + error.message);
    };
    createAndSaveUser = function() {
      user = new Parse.User();
      user.set("username", "my name");
      user.set("password", "my password");
      user.set("email", "my_email@example.com");
      return user.signUp(null, {
        success: function(user) {
          return console.log("Nice!");
        },
        error: (function(_this) {
          return function(user, error) {
            return logError(user, error);
          };
        })(this)
      });
    };
    return this.after('initialize', function() {});
  };
  return defineComponent(user);
});
