define(['parse'], function() {
  var ScripPromotion;
  ScripPromotion = Parse.Object.extend("Promotions", {
    testLog: function() {
      return console.log("Test");
    }
  }, {
    all: function(time_period) {
      var query;
      console.log("Get all Scrip Promotions");
      query = new Parse.Query(ScripPromotion);
      query.equalTo('time_period', time_period);
      return query;
    }
  });
  return ScripPromotion;
});
