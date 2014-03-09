define(['flight/lib/component', 'persistence/user'], function(defineComponent, PersistUser) {
  var user;
  user = function() {
    this.defaultAttrs;
    this.retrieve = function(id) {};
    this.dataObject = function(data) {
      return {
        firstName: data.first_name,
        lastName: data.last_name,
        authId: data.id
      };
    };
    this.createNewUser = function(event, data) {
      var saveSuccess, userData;
      saveSuccess = function(user) {
        return $.cookie('parse_user_id', user.id);
      };
      userData = this.dataObject(data);
      return PersistUser.create(userData);
    };
    this.getUser = function(ev, data) {
      return this.findUser(data);
    };
    this.findUser = function(data) {
      var query;
      query = PersistUser.findByAuthId(data.id);
      return query.first().then((function(_this) {
        return function(user) {
          if (user) {
            return $.cookie('parse_user_id', user.id);
          } else {
            return _this.trigger('userNotFound', data);
          }
        };
      })(this), (function(_this) {
        return function(error) {
          return alert("Error when trying to find a user " + error);
        };
      })(this));
    };
    return this.after('initialize', function() {
      this.on('successfulLogin', this.getUser);
      return this.on('userNotFound', this.createNewUser);
    });
  };
  return defineComponent(user);
});
