// Just returning true for MongoDB model functions
import { IntentMessage } from '../IntentMessage'

export async function findIntentWithReply(intentName: string) {
    return true
}


export async function createIntentMessage(intentMessage: IntentMessage): Promise<Boolean> {
    return true
}

export async function deleteIntentReply(intentName: string): Promise<Boolean> {
   return true
}