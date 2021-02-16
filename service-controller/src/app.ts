import './mongoose'
import express from 'express'
import { registerRoutes } from './routes'

function init() {
    const app = express()

    app.use(express.json())

    registerRoutes(app)

    app.listen(8002, '0.0.0.0', () => {
        console.log('Service constoller started')
    })
}


// Start the server
init()

