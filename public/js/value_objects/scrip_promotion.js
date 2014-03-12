define([], function() {
  var ScripPromotion;
  ScripPromotion = (function() {
    function ScripPromotion(args) {
      this.args = args;
    }

    ScripPromotion.prototype.parameters = function() {
      return this.args || {};
    };

    ScripPromotion.prototype.id = function() {
      return this.parameters().id;
    };

    ScripPromotion.prototype.key = function() {
      return this.parameters().key;
    };

    ScripPromotion.prototype.business = function() {
      return this.parameters().business;
    };

    ScripPromotion.prototype.denomination = function() {
      return this.parameters().denomination || 0;
    };

    ScripPromotion.prototype.denominationDisplay = function() {
      var denomination;
      denomination = parseFloat(this.denomination()).toFixed(2);
      return "$" + denomination;
    };

    ScripPromotion.prototype.returnAmountDecimal = function() {
      return this.parameters()["return"] || 0;
    };

    ScripPromotion.prototype.returnAmountPercent = function() {
      var amount;
      amount = (this.returnAmountDecimal() * 100).toFixed(1);
      return "" + amount + "%";
    };

    ScripPromotion.prototype.toJson = function() {
      var result;
      return result = {
        name: this.business(),
        denomination: this.denominationDisplay(),
        returnAmount: this.returnAmountPercent(),
        key: this.key(),
        id: this.id()
      };
    };

    return ScripPromotion;

  })();
  return ScripPromotion;
});
