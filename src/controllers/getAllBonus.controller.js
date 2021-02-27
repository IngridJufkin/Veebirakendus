const db = require('../db')
const Bonus = db.Bonus

module.exports = async function (req, res) {
  try {
    let filter = {}
    filter = req.query
    if (req.query.age === 'true') {
      filter.age = { $exists: true }
    }

    const allBonus = await Bonus.find(filter)
    res.status(200).json({ allBonus })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}
