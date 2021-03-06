const { json } = require('express')
const express = require('express')
const Message = require('../models/message')
// const auth = require('../middleware/auth')
const router = new express.Router()

// Message creation endpoint
router.post('/request', async (req, res) => {
    const message = new Message({ ...req.body })
    try {
        await message.save()
        res.status(201).render('request-success', {
            layout: 'default',
            title: 'Request Info',
            name: 'Jeff Philapy',
            status: { message: 'Succesful Submission' }
        })
    } catch (e) {
        console.log(e.errors)

        res.render('request', {
            layout: 'default',
            title: 'Request Info',
            name: 'Jeff Philapy',
            error: e.errors,
            request: req.body
            //JSON.stringify(e)
        })
    }
})

module.exports = router


