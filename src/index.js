/** SETUP */
const app = require('./app')
const port = process.env.PORT


// server
app.listen(port, () => {
    console.log('server is up on port.' + port)
})