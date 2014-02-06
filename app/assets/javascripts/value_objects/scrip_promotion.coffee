define [], () ->
  class ScripPromotion
    constructor: (@args) ->

    parameters: ->
      @args || {}

    business: ->
      @parameters().business

    denomination: ->
      @parameters().denomination || 0

    denominationDisplay: ->
      denomination = parseFloat(@denomination()).toFixed(2)
      "$#{denomination}"

    returnAmountDecimal: ->
      @parameters().return || 0

    returnAmountPercent: ->
      amount = (@returnAmountDecimal() * 100).toFixed(1)
      "#{amount}%"

    toJson: ->
      result =
        name: @business()
        denomination: @denominationDisplay()
        returnAmount: @returnAmountPercent()

  ScripPromotion
