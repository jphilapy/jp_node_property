/** SETUP */

const path = require('path')
const express = require('express')
const hbs = require('express-handlebars')
const request = require('postman-request')

require('./db/mongoose')

const userRouter = require('./routers/users')
const taskRouter = require('./routers/tasks')
const propertyRouter = require('./routers/properties')
const basicRouter = require('./routers/basic')
const configRouter = require('./routers/config')

const publicDir = path.join(__dirname, '../public')


// const viewsPath = path.join(__dirname, '../templates/views')
// const partialsPath = path.join(__dirname, '../templates/partials')



const app = express()
app.set('view engine', 'hbs') // setup handlebars templating system

app.engine('hbs', hbs({
    extname: 'hbs',
    defaultView: 'default',
    layoutsDir: __dirname + '/../views/layouts/',
    partialsDir: __dirname + '/../views/partials/'
}));

// app.set('view engine', 'hbs') // setup handlebars templating system
// app.set('views', viewsPath) // set where templates are
// hbs.registerPartials(partialsPath) // register partials



// handle static pages
app.use(express.static(publicDir))

// handle all the rest
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)
app.use(propertyRouter)
app.use(basicRouter)
app.use(configRouter)


module.exports = app