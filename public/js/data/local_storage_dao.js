define([], function() {
  var localStorageDao;
  return localStorageDao = function() {
    this.save = function(ev, data) {
      return this._functionRunner((function(_this) {
        return function() {
          return localStorage.setItem(data.key, _this._stringified(data));
        };
      })(this));
    };
    this.edit = function(ev, data) {};
    this["delete"] = function(ev, data) {
      return this._functionRunner((function(_this) {
        return function() {
          return localStorage.removeItem(key);
        };
      })(this));
    };
    this.clearDatabase = function(ev, data) {
      return this._functionRunner((function(_this) {
        return function() {
          return localStorage.clear();
        };
      })(this));
    };
    this._functionRunner = function(localStorageFunction) {
      var e;
      try {
        return localStorageFunction();
      } catch (_error) {
        e = _error;
        return console.log("ERROR " + e.message);
      }
    };
    this._stringified = function(data) {
      return JSON.stringify(data);
    };
    return this.after('initialize', function() {
      return this.on('event/daoClearDatabase', this.clearDatabase);
    });
  };
});
