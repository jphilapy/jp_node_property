/** SETUP */

const path = require('path')
const express = require('express')
const hbs = require('express-handlebars')
const request = require('postman-request')

// const paginateHelper = require('../src/utils/express-handlebars-paginate');



// var hbsPag = hbs.create({ /* config */ });
// hbsPag.handlebars.registerHelper('paginateHelper', paginateHelper.createPagination);

require('./db/mongoose')

// import routes
const userRouter = require('./routers/users')
const taskRouter = require('./routers/tasks')
const propertyRouter = require('./routers/properties')
const basicRouter = require('./routers/basic')
const messagesRouter = require('./routers/messages')
const configRouter = require('./routers/config')

const publicDir = path.join(__dirname, '../public')

const app = express()
app.set('view engine', 'hbs') // setup handlebars templating system

app.engine('hbs', hbs({
    extname: 'hbs',
    defaultView: 'default',
    layoutsDir: __dirname + '/../views/layouts/',
    partialsDir: __dirname + '/../views/partials/'
}));


// handle static pages
app.use(express.static(publicDir))

const fonts = path.join(__dirname, '../node_modules/@fortawesome/fontawesome-free/')

app.use('/fonts/', express.static(fonts));


// handle all the rest
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)
app.use(propertyRouter)
app.use(basicRouter)
app.use(messagesRouter)
app.use(configRouter)


module.exports = app