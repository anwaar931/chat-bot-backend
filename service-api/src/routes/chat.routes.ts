import { Router, Request, Response } from 'express'
import { replyForMessage } from '../services/chat.service'


export default (app: Router) => {

    app.post('/chat', async (req: Request, res: Response) => {
        const { message } = req.body

        try {
            const reply = await replyForMessage(message)

            res.send({
                success: true,
                message: reply
            })
        } catch(err) {
            
            res.send({
                success: false,
                err
            })
        }
    })
}