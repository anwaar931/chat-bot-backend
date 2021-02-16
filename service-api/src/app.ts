import express, { Router } from 'express'
import 'dotenv/config'
import { registerRoutes } from './routes'
import assert from 'assert'

assert(process.env.ULTIMATE_AI_API_KEY != null && process.env.ULTIMATE_AI_API_KEY != '',
'process.env.ULTIMATE_AI_API_KEY has to be defined')

function init() {
    const app = express()

    const router = Router(/* For example you can silent the logs of health route, add logger,  */)

    registerRoutes(router)
    
    app.use(express.json())

    // can add api versioning here
    app.use('/api', router)

    app.listen(8001, '0.0.0.0', () => {
        console.log('Service api started')
    })
}


// Start the server
init()

