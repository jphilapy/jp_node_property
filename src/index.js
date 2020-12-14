const path = require('path')
const express = require('express')
require('./db/mongoose')
const hbs = require('hbs')
const request = require('postman-request')

const propertyRouter = require('./models/property')

const app = express()
const port = process.env.PORT || 3000

// define paths
const publicDir = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs') // setup handlebars templating system
app.set('views', viewsPath) // set where templates are
hbs.registerPartials(partialsPath) // register partials

// handle static pages
app.use(express.static(publicDir))
app.use(propertyRouter)

// handle dynamic pages
app.get('', (req, res) => {
    res.render('index', {
        title: 'Property Management',
        name: 'Jeff Philapy'
    })
})


app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Jeff Philapy'
    })
})

app.get('/rentals', (req, res) => {
    res.render('rentals', {
        title: 'About',
        name: 'Jeff Philapy'
    })
})

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'About',
        name: 'Jeff Philapy'
    })
})

app.get('/request', (req, res) => {
    res.render('request', {
        title: 'About',
        name: 'Jeff Philapy'
    })
})

app.get('/test', (req, res) => {
    res.render('template', {
        title: 'Template',
        name: 'Jeff Philapy'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        message: 'This is your example help message',
        name: 'Jeff Philapy'
    })
})

// handle pages that don't exist anywhere
app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 'Help',
        message: 'No existing Help articles',
        name: 'Jeff Philapy'
    })
})


app.get('*', (req, res) => {
    res.render('404', {
        title: 'Page does not exist.',
        message: 'The page you are looking for, does not exist.',
        name: 'Jeff Philapy'
    })
})

// server
app.listen(port, () => {
    console.log('server is up on port.' + port)
})