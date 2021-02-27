//GetAllProducts fail võimaldab andmebaasist saada 1 võimalik toote ID järgi
const db = require('../db')
const Products = db.Products

module.exports = async function (req, res) {
  try {
    let filter = {}
    filter = req.query

    console.log(filter)

    const Product = await Products.findOne({_id: req.params.id})
    res.status(200).json({ Product })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}
