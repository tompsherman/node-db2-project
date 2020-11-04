const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
require('colors')

const router = require('./router/router')

const server = express()

server.use(helmet())
server.use(morgan())
server.use(cors())
server.use(express.json())

server.use('/api/cars', router)

server.get('/test', (req,res)=>{ 
    res.send('endpoint smoking')
})

module.exports = server