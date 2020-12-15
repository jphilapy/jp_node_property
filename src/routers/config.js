const express = require('express')
const Config = require('../models/config')
const auth = require('../middleware/auth')

const router = new express.Router()

router.post('/config', auth, async (req, res) => {
    const config = new Config({ 
        ...req.body
    })

    try {
        await config.save() 
        res.status(201).send(config)
    } catch(e) {
        res.status(400).send(e)
    }
})

module.exports = router