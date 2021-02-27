const db = require('../db')
const Users = db.Users
const jwt = require("jsonwebtoken");

module.exports = async function (req, res) { //saan tänu middleware-ile kätte requestist user data
  try {
    console.log(req.userData)
    const userInUse =  await Users.findOne({email: req.userData.email})
    res.status(200).json({
      email: userInUse.email,
      firstName: userInUse.firstName
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

