const mongoose = require('mongoose')
const validator = require('validator')

const Message = mongoose.model('Message', {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    subject: { type: String, required: true, trim: true },
    prop_type: { type: String, required: true, trim: true },
    price_range: { type: String, required: true, trim: true },
    moveindate: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true }
})

module.exports = Message;