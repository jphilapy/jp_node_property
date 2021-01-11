const express = require('express')
const Property = require('../models/property')
const auth = require('../middleware/auth')
const router = new express.Router()

router.get('', async (req, res) => {
    res.render('index', {
        title: 'Property Management',
        name: 'Jeff Philapy'
    })
})

router.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Jeff Philapy'
    })
})

router.get('/rentals', async (req, res) => {

    const properties = await Property.find({})

    res.render('rentals', {
        title: 'About',
        name: 'Jeff Philapy',
        properties
    })
})
router.get('/property/:_id', async (req, res) => {

    const details = await Property.findById(req.params._id)

    res.render('property', {
        title: 'About',
        name: 'Jeff Philapy',
        property: details
    })
})

router.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'About',
        name: 'Jeff Philapy'
    })
})

router.get('/request', (req, res) => {
    res.render('request', {
        title: 'About',
        name: 'Jeff Philapy'
    })
})

router.get('/test', (req, res) => {
    res.render('template', {
        title: 'Template',
        name: 'Jeff Philapy'
    })
})

router.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        message: 'This is your example help message',
        name: 'Jeff Philapy'
    })
})

// handle pages that don't exist anywhere
router.get('/help/*', (req, res) => {
    res.render('404', {
        title: 'Help',
        message: 'No existing Help articles',
        name: 'Jeff Philapy'
    })
})


router.get('*', (req, res) => {
    res.render('404', {
        title: 'Page does not exist.',
        message: 'The page you are looking for, does not exist.',
        name: 'Jeff Philapy'
    })
})

module.exports = router