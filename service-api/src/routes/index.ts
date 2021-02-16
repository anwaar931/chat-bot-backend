import { Router } from 'express'
import chatRoutes from './chat.routes'
import healthRoutes from './health.routes'



export const registerRoutes = (app: Router) => {
    healthRoutes(app)
    chatRoutes(app) 
}