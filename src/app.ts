import express from 'express'
import compression from 'compression'
import bodyParser from 'body-parser'
import path from 'path'
import Router from './routes/index'
import Database from './database'
import logger from './util/logger'

const app = express()

const databaseConfig = require('../config/database.js')[app.get('env')]
const database = new Database(databaseConfig)

app.set('port', process.env.PORT || 8080)
app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(
    express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 })
)

Router.initializeRoutes(app)

database.initModels()
    .then(() => {
        logger.info('Base de données initialisée')
    })

export default app
