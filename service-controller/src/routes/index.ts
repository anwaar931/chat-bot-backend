import { Express } from 'express'
import repliesRoutes from './reply.routes'
import healthRoutes from './health.routes'



export const registerRoutes = (app: Express) => {
    healthRoutes(app)
    repliesRoutes(app)
}