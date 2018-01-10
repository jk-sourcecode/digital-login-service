const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const swaggerTools = require('swagger-tools')
const YAML = require('yamljs')

const app = express()

app.use(bodyParser.urlencoded({
  extended: true,
  jsonLimit: process.env.BODY_PARSER_JSON_LIMIT || '5mb',
  onerror: (err) => {
    console.log(`Body-Parser: error parsing input -  ${err}`)
  },
}))

const swaggerDoc = YAML.load('swagger.yaml')
swaggerTools.initializeMiddleware(swaggerDoc, (middleware) => {
  // Serve the Swagger documents and Swagger UI
  app.use(middleware.swaggerUi())
})

require('./src/routes')(app)

app.listen(process.env.PORT || 5050)
