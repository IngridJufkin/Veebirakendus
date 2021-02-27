
const db = require('../db') 
const Orders = db.Orders //uus muutuja orders

module.exports = async function (req, res) { 
  try {

    const getOrdersByStatus = await Orders.find({status: req.params.status})
    res.status(200).json({ getOrdersByStatus })

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message })
  }
}