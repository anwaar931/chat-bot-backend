import { Schema, Model, model, Document } from 'mongoose'

export interface IntentMessage extends Document {
    intentName: string
    message: string
}

const schema = new Schema<IntentMessage>(
    {
        intentName: { type: String, required: true, index: true },
        message: { type: String, required: true,  },
    },
    {
        timestamps: true
    }
)

const IntentMessageModel: Model<IntentMessage> = model(
	'IntentMessage',
	schema,
)

export async function findIntentWithReply(intentName: string): Promise<IntentMessage | null> {
    return await IntentMessageModel.findOne({ intentName }).exec()
}

export async function createIntentMessage(intentMessage: IntentMessage): Promise<Boolean> {

    // Checking if intent name already exists
    if(await findIntentWithReply(intentMessage.intentName)) return true

    // Creating intent with reply

    const replyForIntent = new IntentMessageModel({
        intentName: intentMessage.intentName,
        message: intentMessage.message
    })

    await replyForIntent.save()

    return true
}

export async function deleteIntentReply(intentName: string): Promise<Boolean> {
    const replyForIntent = await findIntentWithReply(intentName)

    if(!replyForIntent) return false

    await replyForIntent.delete()

    return true
}



