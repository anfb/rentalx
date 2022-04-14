import { setRoutes } from '@interface/routers'
import express, { json } from 'express'


const app = express()

app.use(json())
setRoutes(app)

export { app }