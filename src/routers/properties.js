const express = require('express')
const Property = require('../models/property')
const auth = require('../middleware/auth')
const router = new express.Router()




/** property stuff */

// Property creation endpoint
router.post('/properties', auth, async (req, res) => {
    const property = new Property({
        ...req.body,
        owner: req.user._id
    })

    try {
        await property.save()
        res.status(201).send(property)
    } catch (e) {
        res.status(400).send(e)
    }
})

// get all properties
router.get('/properties', async (req, res) => {
    try {
        const properties = await Property.find({})
        res.send(properties)
    } catch (e) {
        res.status(500).send()
    }
})

// get one property
router.get('/properties/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const property = await Property.findById(_id)
        if (!property) {

            return res.status(404).send()
        }

        res.send(property)
    } catch (e) {
        res.status(500).send()
    }
})


router.patch('/properties/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const property = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!property) {
            return res.status(404).send()
        }

        res.send(property)
    } catch (e) {
        res.status(400).send()
    }
})



router.delete('/properties/:id', async (req, res) => {
    try {
        const property = await Property.findByIdAndDelete(req.params.id)

        if (!property) {
            return res.status(404).send();
        }

        res.send(property)
    } catch (e) {
        return res.status(500).send()
    }
})


module.exports = router