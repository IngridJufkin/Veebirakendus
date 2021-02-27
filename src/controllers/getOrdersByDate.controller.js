
const db = require('../db') 
const Orders = db.Orders //uus muutuja orders

module.exports = async function (req, res) { 
  try {
    console.log(req.params)
    
    const range = {
      startDate: new Date(req.params.startDate), //alguskuupäv, MM-DD-YYYY
      endDate: new Date(req.params.endDate) //lõppkuupäv, MM-DD-YYYY
    }

    const getOrdersByDate = await Orders.find({
      orderDate: {
          $gte: range.startDate, //greater then
          $lt: range.endDate //less then
      }
    })

    res.status(200).json({ getOrdersByDate })

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message })
  }
}

