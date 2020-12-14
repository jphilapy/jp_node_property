const mongoose = require('mongoose')
const validator = require('validator')

const Property = mongoose.model('Property', {
    name: {
        type: String,
        required: true,
        trim: true
    }
})

module.exports = Property