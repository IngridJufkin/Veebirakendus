const db = require('./../db')
const Users = db.Users

module.exports = async function (req, res) {
  try {
    let filter = {}
    filter = req.query
    const allUsers = await Users.find(filter)
    res.status(200).json({ allUsers })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

