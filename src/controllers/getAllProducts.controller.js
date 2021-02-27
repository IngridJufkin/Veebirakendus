//GetAllProducts fail võimaldab andmebaasist saada kõik võimalikud tooted
const db = require('../db')
const Products = db.Products

module.exports = async function (req, res) {
  try {
    let filter = {}
    filter = req.query
    if (req.query.age === 'true') {
      filter.age = { $exists: true }
    }

    const allProducts = await Products.find(filter)
    res.status(200).json({ allProducts })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}
