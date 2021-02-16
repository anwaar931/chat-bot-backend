import { Express, Request, Response } from 'express'


export default (app: Express) => {

    app.get('/health', async (req: Request, res: Response) => {

       // Should actually check for mongoDB as well
       res.sendStatus(200)
    })
}