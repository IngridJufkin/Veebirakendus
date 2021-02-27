const db = require('../db')
const Users = db.Users

module.exports = async function (req, res) {
  try {
    let filter = {}
    filter = req.query

    const getUsersByEmail = await Users.find({email: req.params.email})
    res.status(200).json({ getUsersByEmail })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message })
  }
}