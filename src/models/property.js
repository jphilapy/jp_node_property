const mongoose = require('mongoose')
const validator = require('validator')

const Property = mongoose.model('Property', {
    title: {
        type: String,
        required: true,
        trim: true
    },
    availability: { type: String },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    zipcode: { type: String },
    country: { type: String },
    bdrm: { type: String },
    bath: { type: String },
    image: { type: String },
    description: { type: String },
    rent: { type: Number },
    deposit: { type: Number },
    remarks: { type: String }
})

module.exports = Property;