require('dotenv').config()

const server = require('./server.js')

const PORT = process.env.PORT || 42069

server.listen(PORT, ()=> {
    console.log(`\n **** smokin on port ${PORT} ****`.bgGreen.black)
})