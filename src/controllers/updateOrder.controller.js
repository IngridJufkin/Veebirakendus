const db = require('../db')
const Orders = db.Orders

module.exports = async function (req, res) {
  try {
    await Orders.updateOne({_id: req.params.id}, {
      $set: req.body
    })
    res.status(200).json({ message: 'Successs!' })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}
