const express = require('express')
const Property = require('../models/property')
const auth = require('../middleware/auth')
const router = new express.Router()

router.get('', async (req, res) => {
    res.render('index', {
        layout: 'default',
        title: 'Property Management',
        name: 'Jeff Philapy'
    })
})

router.get('/about', (req, res) => {
    res.render('about', {
        layout: 'default',
        title: 'About',
        name: 'Jeff Philapy'
    })
})

router.get('/rentals', async (req, res) => {

    const properties = await Property.find({}).lean()

    res.render('rentals', {
        title: 'Rentals',
        layout: 'default',
        properties
    })
})
router.get('/property/:_id', async (req, res) => {

    const details = await Property.findById(req.params._id).lean()

    res.render('property', {
        layout: 'default',
        title: 'Rental',
        name: 'Jeff Philapy',
        property: details
    })
})

router.get('/contact', (req, res) => {
    res.render('contact', {
        layout: 'default',
        title: 'Contact',
        name: 'Jeff Philapy'
    })
})

router.get('/request', (req, res) => {
    res.render('request', {
        layout: 'default',
        title: 'Request Info',
        name: 'Jeff Philapy'
    })
})

router.get('/test', (req, res) => {
    res.render('test', {
        layout: 'default',
        title: 'Template',
        name: 'Jeff Philapy'
    })
})

router.get('/help', (req, res) => {
    res.render('help', {
        layout: 'default',
        title: 'Help',
        message: 'This is your example help message',
        name: 'Jeff Philapy'
    })
})

// handle pages that don't exist anywhere
router.get('/help/*', (req, res) => {
    res.render('404', {
        layout: 'default',
        title: 'Help',
        message: 'No existing Help articles',
        name: 'Jeff Philapy'
    })
})


router.get('*', (req, res) => {
    res.render('404', {
        layout: 'default',
        title: 'Page does not exist.',
        message: 'The page you are looking for, does not exist.',
        name: 'Jeff Philapy'
    })
})

module.exports = router