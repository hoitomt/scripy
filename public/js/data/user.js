define(['flight/lib/component'], function(defineComponent) {
  var user;
  user = function() {
    this.defaultAttrs;
    this.newUser = function(ev, data) {
      console.log("User Handle login");
      this.firstName = data.first_name;
      return this.lastName = data.last_name;
    };
    return this.after('initialize', function() {
      return this.on('successfulLogin', this.newUser);
    });
  };
  return defineComponent(user);
});
