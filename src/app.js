/** SETUP */
const express = require('express')
require('../../task-manager/src/db/mongoose')
const userRouter = require('../../task-manager/src/routers/users')
const taskRouter = require('../../task-manager/src/routers/tasks')

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

module.exports = app