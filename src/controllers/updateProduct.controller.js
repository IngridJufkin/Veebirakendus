//võimaldab update-da kõiki tooteid id järgi

const db = require('../db')
const Products = db.Products

module.exports = async function (req, res) {
  try {
    await Products.updateOne({_id: req.params.id}, {
      $set: req.body
    })
    res.status(200).json({ message: 'Successs!' })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}
