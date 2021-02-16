import { Schema, Model, model, Document } from 'mongoose'

export interface IntentMessage {
    intentName: string
    message: string
}

type IntentMessageDocument = IntentMessage & Document

const schema = new Schema<IntentMessageDocument>(
    {
        intentName: { type: String, required: true, index: true },
        message: { type: String, required: true,  },
    },
    {
        timestamps: true
    }
)

const IntentMessageModel: Model<IntentMessageDocument> = model(
	'IntentMessage',
	schema,
)


export const getNewModelObject = (intentMessage: IntentMessage) => {
    return {
        intentName: intentMessage.intentName,
        message: intentMessage.message
    }
}


export async function findIntentWithReply(intentName: string): Promise<IntentMessageDocument | null> {
    return await IntentMessageModel.findOne({ intentName }).exec()
}

export async function createIntentMessage(intentMessage: IntentMessage): Promise<Boolean> {

    // Checking if intent name already exists
    if(await findIntentWithReply(intentMessage.intentName)) return true

    // Creating intent with reply
    const replyForIntent = new IntentMessageModel(getNewModelObject(intentMessage))

    await replyForIntent.save()

    return true
}

export async function deleteIntentReply(intentName: string): Promise<Boolean> {
    const replyForIntent = await findIntentWithReply(intentName)

    if(!replyForIntent) return false

    await replyForIntent.delete()

    return true
}



