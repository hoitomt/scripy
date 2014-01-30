module.exports = function() {
  var createAndSaveUser, init, logError;
  init = function() {
    return console.log("Initialize User");
  };
  logError = function(user, error) {
    return console.log("Error: " + error.code + " " + error.message);
  };
  createAndSaveUser = function() {
    var user;
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
  return init();
};
