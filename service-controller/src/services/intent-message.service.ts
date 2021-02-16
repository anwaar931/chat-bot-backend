import { DEFAULT_NOT_FOUND_REPLY } from '../constants/DefaultReply'
import { createIntentMessage, deleteIntentReply, findIntentWithReply } from "../models/IntentMessage"

export async function createReply({
    message,
    intentName
}: {
   message: string,
   intentName: string 
}) {
    return await createIntentMessage({
        message,
        intentName
    })
}

export async function deleteReply(intentName: string) {
    return await deleteIntentReply(intentName)
}

export async function findReply(intentName: string) {
    const reply = await findIntentWithReply(intentName)

    return reply?.message ?? DEFAULT_NOT_FOUND_REPLY
}