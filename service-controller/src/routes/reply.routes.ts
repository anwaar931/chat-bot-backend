import { Express, Request, Response } from 'express'
import { createReply, deleteReply, findReply } from '../services/intent-message.service'


export default (app: Express) => {

    app.post('/reply/intent', async (req: Request, res: Response) => {
        const { message, intentName } = req.body

        const resp = await createReply({
            message,
            intentName
        })

        res.send({ success: resp })
    })

    app.delete('/reply/intent', async (req: Request, res: Response) => {
        const { intentName } = req.body

        const resp = await deleteReply(intentName)
        res.send({ success: resp })
    })

    app.get('/reply/intent', async (req: Request, res: Response) => {
        const name: string = String(req.query.name)

        const reply = await findReply(name)

        res.send({
            success: true,
            message: reply
        })
    })
}