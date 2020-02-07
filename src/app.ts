import express from 'express'
import compression from 'compression'
import bodyParser from 'body-parser'
import path from 'path'
import router from './routes/index'

const app = express()

app.set('port', process.env.PORT || 8080)
app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(
    express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 })
)

app.use(process.env.PATH_CONTEXT || '/', router)

export default app
