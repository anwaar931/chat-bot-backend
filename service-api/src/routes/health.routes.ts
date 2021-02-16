import { Router, Request, Response } from 'express'


export default (app: Router) => {

    app.get('/health', async (req: Request, res: Response) => {
       res.sendStatus(200)
    })
}