

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({        
        name: { type: String, unique: true, required: true, minlength: 3, maxlength: 50 },
        brandname: {type: String, required: true, minlength: 2, maxlength: 50 }, 
        productCode: { type: String, unique: true, required: true, minlength: 8, maxlength: 20, match: [/^[A-Z0-9-.]+$/, 'is invalid'] },
        category: ["JELLY", "SOUPS", "CANNED_FOOD"],
        weight: { type: Number, required: true },
        price: { type: Number, required: true },
        kgprice: {type: Number, required: true},
        unit: {type: String, enum: ['KG', 'L']},
        notes: { type: String }
})

schema.set('toJSON', { virtuals: true })
module.exports = mongoose.model('products', schema)
