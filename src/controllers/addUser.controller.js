const db = require('./../db')
const Users = db.Users

module.exports = async function (req, res) {
  try {
    const exixtingUser = await Users.findOne({email: req.body.email}) //email tuleb json kujul body seest
    if (exixtingUser) { //kotroll kas kasutaja on olemas, leia mulle user, kellel sama email
      return res.status(409).json({
        message: "E-mail on juba kasutuses!", //kui olemas siis ütle, et on olemas
    })};
    const user = await Users.create(req.body) // anna terve body ette , mitte ei eraldi, create teeb eraldi ka save useri
    const token = await user.generateAuthToken(); 
    res.status(200).json({ message: 'Successs!', token })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
//suunamine, et helpers kausta