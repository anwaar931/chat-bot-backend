import './mongoose'
import express from 'express'
import { registerRoutes } from './routes'
import { swaggerDocument } from './swagger'
import swaggerUi from 'swagger-ui-express'


function init() {
    const app = express()

    app.use(express.json())

    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

    registerRoutes(app)

    app.listen(8002, '0.0.0.0', () => {
        console.log('Service constoller started, listening on localhost:8002')
    })
}


// Start the server
init()

