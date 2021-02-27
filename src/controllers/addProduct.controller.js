//controlleri fail annab infot kas sisestatud mudel on õige
const db = require('../db')
const Products = db.Products

module.exports = async function (req, res) {
  try {
    await Products.create(req.body)
    res.status(200).json({ message: 'Successs!' })
  } catch (error) {
    res.status(500).json({ message: error.message }) //kõik asjad ei ole nii nagu mudelis nõutud (req nt)
  }
}
