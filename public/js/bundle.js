(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function() {
  var fbFlow, init, initializeFacebook, logInWithFacebook;
  init = function() {
    this.initializeFacebook();
    return this.logInWithFacebook();
  };
  initializeFacebook = function() {
    window.fbAsyncInit = function() {
      Parse.FacebookUtils.init({
        appId: "551368024959921",
        status: true,
        cookie: true,
        xfbml: true
      });
      FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
          return console.log("FB Connected");
        }
      });
    };
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


},{}],2:[function(require,module,exports){
module.exports = function() {
  var init;
  init = function() {
    console.log("Initialize Parse");
    return Parse.initialize("wfX72P5SsvoZNIyzskm30JS3KSmeztH0k1I10bFy", "82FZvofYqRM4d4OvOQLjwoSZT50JhB037nZIYZB6");
  };
  return init();
};


},{}],3:[function(require,module,exports){
var InitializeFacebook, InitializeParse, SeedData, User;

InitializeParse = require('./initialize_parse.coffee');

SeedData = require('./seed_data.coffee');

User = require('./user.coffee');

InitializeFacebook = require('./initialize_facebook.coffee');

InitializeParse();

$(function() {
  return console.log("Doc Ready");
});


},{"./initialize_facebook.coffee":1,"./initialize_parse.coffee":2,"./seed_data.coffee":4,"./user.coffee":5}],4:[function(require,module,exports){
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


},{}]},{},[1,2,3,4,5])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvaG9pdG9tdC9Db2RlL3NjcmlweS9ub2RlX21vZHVsZXMvZ3J1bnQtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL2hvaXRvbXQvQ29kZS9zY3JpcHkvc3JjL2luaXRpYWxpemVfZmFjZWJvb2suY29mZmVlIiwiL1VzZXJzL2hvaXRvbXQvQ29kZS9zY3JpcHkvc3JjL2luaXRpYWxpemVfcGFyc2UuY29mZmVlIiwiL1VzZXJzL2hvaXRvbXQvQ29kZS9zY3JpcHkvc3JjL21haW4uY29mZmVlIiwiL1VzZXJzL2hvaXRvbXQvQ29kZS9zY3JpcHkvc3JjL3NlZWRfZGF0YS5jb2ZmZWUiLCIvVXNlcnMvaG9pdG9tdC9Db2RlL3NjcmlweS9zcmMvdXNlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxNQUFNLENBQUMsT0FBUCxHQUFpQixTQUFBLEdBQUE7QUFFZixNQUFBLG1EQUFBO0FBQUEsRUFBQSxJQUFBLEdBQU8sU0FBQSxHQUFBO0FBQ0wsSUFBQSxJQUFDLENBQUEsa0JBQUQsQ0FBQSxDQUFBLENBQUE7V0FDQSxJQUFDLENBQUEsaUJBQUQsQ0FBQSxFQUZLO0VBQUEsQ0FBUCxDQUFBO0FBQUEsRUFJQSxrQkFBQSxHQUFxQixTQUFBLEdBQUE7QUFDbkIsSUFBQSxNQUFNLENBQUMsV0FBUCxHQUFxQixTQUFBLEdBQUE7QUFDbkIsTUFBQSxLQUFLLENBQUMsYUFBYSxDQUFDLElBQXBCLENBQ0U7QUFBQSxRQUFBLEtBQUEsRUFBTyxpQkFBUDtBQUFBLFFBQ0EsTUFBQSxFQUFRLElBRFI7QUFBQSxRQUVBLE1BQUEsRUFBUSxJQUZSO0FBQUEsUUFHQSxLQUFBLEVBQU8sSUFIUDtPQURGLENBQUEsQ0FBQTtBQUFBLE1BTUEsRUFBRSxDQUFDLGNBQUgsQ0FBa0IsU0FBQyxRQUFELEdBQUE7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QVksS0FBSyxDQUFDLElBQWxCLEdBQXlCLEdBQXpCLEdBQStCLEtBQUssQ0FBQyxPQUFqRCxFQURTO0VBQUEsQ0FKWCxDQUFBO0FBQUEsRUFPQSxpQkFBQSxHQUFvQixTQUFBLEdBQUE7QUFDbEIsUUFBQSxJQUFBO0FBQUEsSUFBQSxJQUFBLEdBQVcsSUFBQSxLQUFLLENBQUMsSUFBTixDQUFBLENBQVgsQ0FBQTtBQUFBLElBQ0EsSUFBSSxDQUFDLEdBQUwsQ0FBUyxVQUFULEVBQXFCLFNBQXJCLENBREEsQ0FBQTtBQUFBLElBRUEsSUFBSSxDQUFDLEdBQUwsQ0FBUyxVQUFULEVBQXFCLGFBQXJCLENBRkEsQ0FBQTtBQUFBLElBR0EsSUFBSSxDQUFDLEdBQUwsQ0FBUyxPQUFULEVBQWtCLHNCQUFsQixDQUhBLENBQUE7V0FLQSxJQUFJLENBQUMsTUFBTCxDQUFZLElBQVosRUFDRTtBQUFBLE1BQUEsT0FBQSxFQUFTLFNBQUMsSUFBRCxHQUFBO2VBQ1AsT0FBTyxDQUFDLEdBQVIsQ0FBWSxPQUFaLEVBRE87TUFBQSxDQUFUO0FBQUEsTUFFQSxLQUFBLEVBQU8sQ0FBQSxTQUFBLEtBQUEsR0FBQTtlQUFBLFNBQUMsSUFBRCxFQUFPLEtBQVAsR0FBQTtpQkFDTCxRQUFBLENBQVMsSUFBVCxFQUFlLEtBQWYsRUFESztRQUFBLEVBQUE7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBRlA7S0FERixFQU5rQjtFQUFBLENBUHBCLENBQUE7U0FtQkEsSUFBQSxDQUFBLEVBcEJlO0FBQUEsQ0FBakIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHMgPSAtPlxuXG4gIGluaXQgPSAtPlxuICAgIEBpbml0aWFsaXplRmFjZWJvb2soKVxuICAgIEBsb2dJbldpdGhGYWNlYm9vaygpXG5cbiAgaW5pdGlhbGl6ZUZhY2Vib29rID0gLT5cbiAgICB3aW5kb3cuZmJBc3luY0luaXQgPSAtPlxuICAgICAgUGFyc2UuRmFjZWJvb2tVdGlscy5pbml0XG4gICAgICAgIGFwcElkOiBcIjU1MTM2ODAyNDk1OTkyMVwiXG4gICAgICAgIHN0YXR1czogdHJ1ZVxuICAgICAgICBjb29raWU6IHRydWVcbiAgICAgICAgeGZibWw6IHRydWVcblxuICAgICAgRkIuZ2V0TG9naW5TdGF0dXMgKHJlc3BvbnNlKSAtPlxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09ICdjb25uZWN0ZWQnKVxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRkIgQ29ubmVjdGVkXCIpXG4gICAgICAgICAgIyB1c2VyIGxvZ2dlZCBpbiBhbmQgbGlua2VkIHRvIGFwcFxuICAgICAgICAgICMgaGFuZGxlIHRoaXMgY2FzZSBIRVJFXG4gICAgICByZXR1cm5cbiAgICByZXR1cm5cblxuICBsb2dJbldpdGhGYWNlYm9vayA9IC0+XG4gICAgJCgnI2pzLWZiLWxvZ2luJykub24gJ2NsaWNrJywgPT5cbiAgICAgIEBmYkZsb3coKVxuXG4gIGZiRmxvdyA9IC0+XG4gICAgUGFyc2UuRmFjZWJvb2tVdGlscy5sb2dJbiBudWxsLFxuICAgICAgc3VjY2VzczogKHVzZXIpIC0+XG4gICAgICAgIGlmIG5vdCB1c2VyLmV4aXN0ZWQoKVxuICAgICAgICAgIGNvbnNvbGUubG9nIFwiVXNlcnggaGFzIHNpZ25lZCB1cCBhbmQgbG9nZ2VkIGluIHRocm91Z2ggZmFjZWJvb2tcIlxuICAgICAgICBlbHNlXG4gICAgICAgICAgY29uc29sZS5sb2cgXCJVc2VyIGhhcyBsb2dnZWQgaW4gdGhyb3VnaCBmYWNlYm9va1wiXG4gICAgICBlcnJvcjogKHVzZXIsIGVycm9yKSA9PlxuICAgICAgICBjb25zb2xlLmxvZyBcIlVzZXIgQ2FuY2VsbGVkXCJcbiAgICAgICAgQGxvZ0Vycm9yKHVzZXIsIGVycm9yKVxuXG4gIGluaXQoKSIsIm1vZHVsZS5leHBvcnRzID0gLT5cbiAgaW5pdCA9IC0+XG4gICAgY29uc29sZS5sb2cgXCJJbml0aWFsaXplIFBhcnNlXCJcbiAgICBQYXJzZS5pbml0aWFsaXplKFwid2ZYNzJQNVNzdm9aTkl5enNrbTMwSlMzS1NtZXp0SDBrMUkxMGJGeVwiLCBcIjgyRlp2b2ZZcVJNNGQ0T3ZPUUxqd29TWlQ1MEpoQjAzN25aSVlaQjZcIilcblxuICBpbml0KClcbiIsIkluaXRpYWxpemVQYXJzZSA9IHJlcXVpcmUoJy4vaW5pdGlhbGl6ZV9wYXJzZS5jb2ZmZWUnKVxuU2VlZERhdGEgPSByZXF1aXJlKCcuL3NlZWRfZGF0YS5jb2ZmZWUnKVxuVXNlciA9IHJlcXVpcmUoJy4vdXNlci5jb2ZmZWUnKVxuSW5pdGlhbGl6ZUZhY2Vib29rID0gcmVxdWlyZSgnLi9pbml0aWFsaXplX2ZhY2Vib29rLmNvZmZlZScpXG5cbkluaXRpYWxpemVQYXJzZSgpXG4kIC0+XG4gIGNvbnNvbGUubG9nIFwiRG9jIFJlYWR5XCIiLCJtb2R1bGUuZXhwb3J0cyA9IC0+XG4gIGluaXQgPSAtPlxuICAgIGNvbnNvbGUubG9nIFwiSW5pdGlhbGl6ZSBTZWVkIERhdGFcIlxuXG4gIGluaXQoKSIsIm1vZHVsZS5leHBvcnRzID0gKCkgLT5cbiAgaW5pdCA9IC0+XG4gICAgY29uc29sZS5sb2coXCJJbml0aWFsaXplIFVzZXJcIilcbiAgICAjIGNyZWF0ZUFuZFNhdmVVc2VyKClcblxuICBsb2dFcnJvciA9ICh1c2VyLCBlcnJvcikgLT5cbiAgICBjb25zb2xlLmxvZyBcIkVycm9yOiBcIiArIGVycm9yLmNvZGUgKyBcIiBcIiArIGVycm9yLm1lc3NhZ2VcblxuICBjcmVhdGVBbmRTYXZlVXNlciA9IC0+XG4gICAgdXNlciA9IG5ldyBQYXJzZS5Vc2VyKClcbiAgICB1c2VyLnNldChcInVzZXJuYW1lXCIsIFwibXkgbmFtZVwiKVxuICAgIHVzZXIuc2V0KFwicGFzc3dvcmRcIiwgXCJteSBwYXNzd29yZFwiKVxuICAgIHVzZXIuc2V0KFwiZW1haWxcIiwgXCJteV9lbWFpbEBleGFtcGxlLmNvbVwiKVxuXG4gICAgdXNlci5zaWduVXAgbnVsbCxcbiAgICAgIHN1Y2Nlc3M6ICh1c2VyKSAtPlxuICAgICAgICBjb25zb2xlLmxvZyBcIk5pY2UhXCJcbiAgICAgIGVycm9yOiAodXNlciwgZXJyb3IpID0+XG4gICAgICAgIGxvZ0Vycm9yKHVzZXIsIGVycm9yKVxuXG4gIGluaXQoKVxuIl19
