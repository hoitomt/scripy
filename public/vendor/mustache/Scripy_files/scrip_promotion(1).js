define([], function() {
  var ScripPromotion;
  ScripPromotion = (function() {
    function ScripPromotion(args) {
      this.args = args;
    }

    ScripPromotion.prototype.parameters = function() {
      return this.args || {};
    };

    ScripPromotion.prototype.business = function() {
      return this.parameters().business;
    };

    ScripPromotion.prototype.denomination = function() {
      return this.parameters().denomination;
    };

    ScripPromotion.prototype.returnAmountDecimal = function() {
      return this.parameters()["return"] || 0;
    };

    ScripPromotion.prototype.returnAmountPercent = function() {
      return "" + (this.returnAmountDecimal() * 100) + "%";
    };

    return ScripPromotion;

  })();
  return ScripPromotion;
});
