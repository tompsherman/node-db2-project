const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
require('colors')

const server = express()

server.use(helmet())
server.use(morgan())
server.use(cors())
server.use(express.json())

server.get('/test', (req,res)=>{ 
    res.send('endpoint smoking')
})

module.exports = server