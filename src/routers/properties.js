const express = require('express')
const Property = require('./properties')
const router = new express.Router()

/** TASKS */

// Property creation endpoint
router.post('/properties', async (req, res) => {
    const property = new Property(req.body)

    try {
        await property.save()
        res.status(201).send(property)
    } catch(e) {
        res.status(400).send(e)
    }
})

// get all properties
router.get('/properties', async (req, res)=>{
    try {
        const properties = await Property.find({})
        res.send(properties)
    } catch (e) {
        res.status(500).send()
    }
})

// get one task
router.get('/properties/:id', async (req, res)=>{
    const _id = req.params.id
   
    try {
        const property =  await Property.findById(_id)
        if(!property) {
            
            return res.status(404).send()
        }

        res.send(property)
    } catch (e) {
        res.status(500).send()
    }
})

// video #98 Resource Updating Endpoints: Part 1
router.patch('/properties/:id', async (req, res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if(!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!'})
    }

    try {
        const property = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if(!property) {
            return res.status(404).send()
        }

        res.send(property)
    } catch (e) {
        res.status(400).send()
    }
})


// Video #98 Resource Deleting Endpoints
router.delete('/properties/:id', async (req, res) => {
    try {
        const property = await Property.findByIdAndDelete(req.params.id)

        if(!property) {
            return res.status(404).send();
        }

        res.send(property)
    } catch(e) {
        return res.status(500).send()
    }
})


module.exports = router