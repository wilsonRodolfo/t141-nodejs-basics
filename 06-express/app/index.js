const {host, port} = require('./config.js')
const express = require('express')
const bodyParser = require('body-parser')

//setup
const app = express()
app.use(bodyParser.json())
//app.use(express.static('public'))

//publish HTML5 app
app.get('/', (request, response) => {
    response.send("Hi Wilson")
})

app.get('/about', (request, response) => {
    response.send('This is an express application')
})

//server startup
app.listen(port, () => {
    console.log(`Server statarted at http://${host}:${port}`)
})