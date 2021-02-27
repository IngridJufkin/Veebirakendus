require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3001
const router = require('./src/router')
//---Lisaasjad
const morgan = require("morgan");
const cors = require("cors");
//const config = require("./config/db");

//--------------------------

//configure body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//configure body-parser ends here

app.use(morgan("dev")); // configire morgan
app.use(cors());//registering cors

app.use('/test', (req, res, next, error) => {
  console.log(error)
  if (error) res.status(500)
  res.send('Hakkama said! Tubli!')
})

app.use('/api', router)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
