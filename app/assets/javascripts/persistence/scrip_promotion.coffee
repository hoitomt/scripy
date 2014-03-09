define [
  'parse'
], () ->
  ScripPromotion = Parse.Object.extend "Promotions", {
    # Instance Methods
    testLog: ->
      console.log "Test"
  }, {
    # Class Methods
    all: (time_period) ->
      console.log "Get all Scrip Promotions"
      query = new Parse.Query(ScripPromotion)
      query.equalTo('time_period', time_period)
      return query
  }

  return ScripPromotion
