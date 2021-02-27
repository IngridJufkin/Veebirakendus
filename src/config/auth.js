const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => { //next kustub järgmise middleware-i välja
  try {
    const token = req.headers.authorization.replace("Bearer ", "");
    const decoded = jwt.verify(token, "secret");
    req.userData = decoded; //requestile pannakse token juurde (userData)
    //console.log(req.userData);
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Audentimine ei õnnestunud!"
    });
  }
};