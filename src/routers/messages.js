const express = require('express')
const Message = require('../models/message')
const auth = require('../middleware/auth')
const router = new express.Router()

// Message creation endpoint
router.post('/contact', async (req, res) => {
    const message = new Message(req.body)

    try {
        await message.save()
        res.status(201).send(message)
    } catch (e) {
        // res.status(400).send(e)
        res.status(400).send('Validation error')
    }
})

module.exports = router