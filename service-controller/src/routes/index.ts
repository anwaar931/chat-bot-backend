import { Express } from 'express'
import repliesRoutes from './reply.routes'



export const registerRoutes = (app: Express) => {
    repliesRoutes(app)
}