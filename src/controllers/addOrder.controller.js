

const db = require('../db')
const Orders = db.Orders 
const uniquieID = require('./../helpers/Uniqueid') // koodi asukoht


module.exports = async function (req, res) {
  try {
    const count = await Orders.find().count() // loeb enne kõik tellimused kokku
    console.log(req.body)
    req.body.orderNumber = uniquieID('ORDER-', count) // tulemus pannekse orderNumbri asemel, mis leitakse siis orders.model.js'st

    await Orders.create(req.body)
    res.status(200).json({ message: 'Successs!' })

  } catch (error) {
    res.status(500).json({ message: error })
  }
}
