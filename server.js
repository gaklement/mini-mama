// Import dependencies
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const mongoUtil = require('./mongoUtil')

// Create a new express application named 'app'
const app = express()

// Set our backend port to be either an environment variable or port 6000
const port = process.env.PORT || 6000

mongoUtil.connectToServer((error) => {
  if (error) {
    console.log('Error:', error)
  }

  // This application level middleware prints incoming request to the servers console, userful to see incoming requests
  app.use((req, res, next) => {
    console.log(`Request_Endoint: ${req.method} ${req.url}`)
    next()
  })

  // Configure a body parser middleware
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  // Configure the CORs middleware
  app.use(cors())

  // Require Route
  const api = require('./routes/routes')

  // Configure app to use route
  app.use('/api/v1/', api)

  // This middleware informs the express application to serve our compiled React files
  if (
    process.env.NODE_ENV === 'production' ||
    process.env.NODE_ENV === 'staging'
  ) {
    app.use(express.static(path.join(__dirname, 'client/build')))

    app.get('*', function (req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
    })
  }

  // Catch any bad requests
  app.get('*', (req, res) => {
    res.status(200).json({
      msg: 'Catch All',
    })
  })

  // Configure our server to listen on the port defined by our port variable
  app.listen(port, () => console.log(`BACK_END_SERVICE_PORT: ${port}`))
})
