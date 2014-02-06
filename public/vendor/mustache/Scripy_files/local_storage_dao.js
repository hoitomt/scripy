define([], function() {
  var localStorageDao;
  return localStorageDao = function() {
    this.save = function(key, data) {
      return this._functionRunner((function(_this) {
        return function() {
          return localStorage.setItem(key, _this._stringify(data));
        };
      })(this));
    };
    this.edit = function(data) {};
    this["delete"] = function(data) {
      return this._functionRunner((function(_this) {
        return function() {
          return localStorage.removeItem(key);
        };
      })(this));
    };
    this.all = function(key) {
      return this._functionRunner((function(_this) {
        return function() {
          return localStorage.getItem(key);
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
    this._stringify = function(data) {
      return JSON.stringify(data);
    };
    return this.after('initialize', function() {
      return this.on('event/daoClearDatabase', this.clearDatabase);
    });
  };
});
