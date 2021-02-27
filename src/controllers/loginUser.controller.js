const db = require('./../db')
const Users = db.Users


module.exports = async function (req, res) { //saan emaili ja passwordi
    try {
        const user = await Users.findByCredentials(req.body.email, req.body.password) //kustun välja findByCredentials mudelist
        const token = await user.generateAuthToken(); //kutsun välja fn tokeni genereerimiseks
        res.status(201).json({ user, token });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
    
}