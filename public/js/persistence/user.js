define(['parse', 'jquery-cookie'], function() {
  var User;
  User = Parse.Object.extend("ScripyUsers", {
    testLog: function() {
      return console.log("Test");
    }
  }, {
    create: function(attrs) {
      var user;
      user = new User();
      return user.save(attrs, {
        success: function(user) {
          return $.cookie(window.userIdCookie, user.id);
        },
        error: function(user, error) {
          return alert("There was an error saving the user " + error);
        }
      });
    },
    findByAuthId: function(authId) {
      var query;
      query = new Parse.Query(User);
      query.equalTo('authId', authId);
      return query;
    }
  });
  return User;
});
