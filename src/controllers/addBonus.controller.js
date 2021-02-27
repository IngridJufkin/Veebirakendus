const db = require('../db')
const Bonus = db.Bonus

module.exports = async function (req, res) {
  try {
    await Bonus.create(req.body)
    console.log('hei')
    res.status(200).json({ message: 'Successs!' })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}
