//andmebaasiga ühendamine, suunab andmed kaustadest controllersitele
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = global.Promise
console.log(process.env.MONGODB_URI)
module.exports = {
    Users: require('./models/users.model'),
    Products: require('./models/products.model'),
    Orders: require('./models/orders.model'),
    Bonus: require('./models/bonus.model')

}
