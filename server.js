const express = require('express')
const path = require('path')
const app = express()

const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: 'd086b10e51c14b078b0abfae8e17baa1',
  captureUncaught: true,
  captureUnhandledRejections: true,
})


app.use(express.json())


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'))
})

const port = process.env.PORT || 4545

app.listen(port, function() {
  rollbar.log('Hello World, I am Rollbar')
  console.log(`Server is blaring out to ${port}`)
})

