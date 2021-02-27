const { Bonus } = require('../db')
const db = require('../db')
const Orders = db.Orders
let totalPrice = 0
let totalDiscount = 0

module.exports = async function (req, res) {
  try {
    let filter = {}
    filter = req.query
    if (req.query.age === 'true') {
      filter.age = { $exists: true }
    }

    let allOrders = await Orders.find(filter)
    let i = 0
    for await (const order of allOrders) {
      totalPrice = 0
      for (const product of order.products) {
        let price = product.price
        let amount = product.amount
        totalPrice += price * amount
      }
      for (const bonusCode of order.bonusCode) { //teine nested-data
        let discount = bonusCode.discount
        totalDiscount = totalPrice * (discount / 100)
      }
      if (totalDiscount > 0) {
        allOrders[i].toPay = (totalPrice - totalDiscount).toFixed(2)
      }
      else {
        allOrders[i].toPay = totalPrice.toFixed(2)
      }
      allOrders[i].totalPrice = totalPrice.toFixed(2)
      allOrders[i].totalDiscount = totalDiscount.toFixed(2)
      i += 1
    }
    console.log(allOrders)

    res.status(200).json({ allOrders })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
