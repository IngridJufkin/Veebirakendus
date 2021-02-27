const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const schema = new Schema({
    //username: { type: String, unique: true, required: true, minlength: 3, maxlength: 31, match: [/^[a-zA-Z0-9-.]+$/, 'is invalid']  },
    email: { type: String, unique: true, required: true, minlength: 3, maxlength: 31, match: [/^[a-zA-Z0-9-.@]+$/, 'is invalid']  },
    password: { type: String, required: true, minlength: 8},
    firstName: { type: String, required: true, minlength: 2, maxlength: 15 },
    lastName: { type: String, required: true, maxlength: 15 },
    createdDate: { type: Date, default: Date.now },
    accessType: {
      type: String,  
      enum : ['ADMIN','NOT_ADMIN'],
      default: 'NOT_ADMIN'
    },
    age: { type: Number },
    tokens: [
      {
        token: {
          type: String,
          required: true
        }
      }
    ]
})


schema.pre("save", async function(next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

//this method generates an auth token for the user
schema.methods.generateAuthToken = async function() {
  const user = this;
  const token = jwt.sign({ _id: user._id, accessType: user.accessType, firstname: user.firstName, lastname: user.lastName, age: user.age, email: user.email },
  "secret"); //secret peab vastama sellele, mis on meil getUserDetailsControllersis
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

//this method search for a user by email and password.
schema.statics.findByCredentials = async (email, password) => { //annan ette emaili ja parooli parameetritena, mis tulevad controllerist
  const user = await User.findOne({ email }); //otsib emaili üles
  if (!user) {
    throw new Error( "Vale kasutajanimi või parool!");
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password);//kas kasutaja password = database password
  if (!isPasswordMatch) {
    throw new Error("Vale kasutajanimi või parool!");
  }
  return user;
};


schema.set('toJSON', { virtuals: true })
const User = mongoose.model('users', schema)
module.exports = User;
