const db = require('../db') 
const ordersModel = require('../models/orders.model')
const Orders = db.Orders //uus muutuja orders

module.exports = async function (req, res) { 
  try {

  
    const Order = await Orders.findOne({_id: req.params.id}) //find one lisame, viuntside sees päringu parameeter, mis on id
      let totalPrice = 0
      let totalDiscount = 0

      for (const product of Order.products) { 
        let price = product.price
        let amount = product.amount
        totalPrice += price*amount
      } 

      for (const bonusCode of Order.bonusCode) { //teine nested-data
        let discount = bonusCode.discount
        totalDiscount = totalPrice*(discount/100)
      }

      toPay = totalPrice-totalDiscount

    res.status(200).json({ Order, totalPrice, totalDiscount, toPay})
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
