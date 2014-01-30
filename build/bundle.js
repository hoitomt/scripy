(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var InitializeFacebook, InitializeParse, SeedData, User;

InitializeParse = require('./initialize_parse');

SeedData = require('./seed_data');

User = require('./user');

InitializeFacebook = require('./initialize_facebook');

InitializeParse();

User();

},{"./initialize_facebook":2,"./initialize_parse":3,"./seed_data":4,"./user":5}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
module.exports = function() {
  var init;
  init = function() {
    console.log("Initialize Parse");
    return Parse.initialize("wfX72P5SsvoZNIyzskm30JS3KSmeztH0k1I10bFy", "82FZvofYqRM4d4OvOQLjwoSZT50JhB037nZIYZB6");
  };
  return init();
};

},{}],4:[function(require,module,exports){
module.exports = function() {
  var init;
  init = function() {
    return console.log("Initialize Seed Data");
  };
  return init();
};

},{}],5:[function(require,module,exports){
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

},{}]},{},[1])