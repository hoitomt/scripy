define(['flight/lib/component'], function(defineComponent) {
  var spinner;
  spinner = function() {
    this.startLoading = function() {
      return $.mobile.loading("show");
    };
    this.stopLoading = function() {
      return $.mobile.loading("hide");
    };
    return this.after('initialize', function() {
      this.on(document, 'startLoading', this.startLoading);
      this.on(document, 'stopLoading', this.stopLoading);
      return this.trigger('startLoading');
    });
  };
  return defineComponent(spinner);
});
