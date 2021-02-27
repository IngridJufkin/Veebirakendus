//võimaldab delete-ida kõiki tooteid id järgi

const db = require('../db')
const Products = db.Products

module.exports = async function (req, res) {
  try {
    await Products.deleteOne({_id: req.params.id})
    res.status(200).json({ message: 'Successs!' })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}
