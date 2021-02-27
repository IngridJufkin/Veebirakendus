const mongoose = require('mongoose')
const Schema = mongoose.Schema
 
const schema = new Schema (
{
    code: {type: String, minlength: 3, maxlength: 20, match: [/^[A-Z0-9-.]+$/, 'is invalid']},
    status: {
        type: String,
        enum:["ACTIVE", "UNACTIVE"],	
        required: true},
    discount: {type: Number, required: true}
     })
 
schema.set('toJSON', { virtuals: true })
module.exports = mongoose.model('bonus', schema) 