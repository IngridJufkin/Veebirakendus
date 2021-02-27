const mongoose = require('mongoose')
const Schema = mongoose.Schema
 
const schema = new Schema (
{
    orderNumber: {type: String, unique: true, required: true},
    products: [{
        name: { type: String},
        productCode: {type: String},
        category: ["JELLY", "SOUPS", "CANNED_FOOD"],
        weight: {type: Number, required: true},
        price: {type: Number, required: true},
        kgprice: {type: String, required: true},
        notes: {type: String},
        amount: {type: Number, required: true}
        } ],
    bonusCode: [{
        code: {type: String},
        discount: {type: Number, required: true}
         }],
    orderDate: {type: Date, default: Date.now()},
    status: {
	    type: String, 
        enum:["WAITING_FOR_PAYMENT", "DONE"],
        required: true
},
totalPrice: {type: Number},
totalDiscount: {type: Number},
toPay: {type: Number}
})
 
schema.set('toJSON', { virtuals: true })
 
module.exports = mongoose.model('orders', schema)        