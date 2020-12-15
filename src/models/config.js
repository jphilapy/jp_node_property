const mongoose = require('mongoose')
const validator = require('validator')

const Config = mongoose.model('Config', {
    title: {
        type: String,
        required: true,
        trim: true
    },    
    phone: {
        type: String,
        required: true,
        trim: true
    },
})

module.exports = Config