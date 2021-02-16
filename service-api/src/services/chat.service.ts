import { possibleIntentsForMessage } from '../api/ultimate.api'
import { getReplyforIntent } from '../api/controller.api'

// Assuming that we are not storing the conversation and it is coming from the client.
const CONVERSATION_ID = '123'
/**
 * Currently not managing session so just using a static bot Id. We can manage bots by giving access token/ api key
 * Or also the client can also manage bot at his server. Just to keep it simple using a constant here.
 * */ 
export const BOT_ID = '5f74865056d7bb000fcd39ff'

// Assuming that least confidence level is 5
const MIN_CONFIDENCE_LEVEL = 0.5

export const DEFAULT_AI_ANSWER = 'AI could not answer'

type Intent = {
    confidence: number
    name: string
}

export async function getIntentsFromApi(message: string) {
    const data = await possibleIntentsForMessage({
        message, 
        botId: BOT_ID,
        conversationId: CONVERSATION_ID
    })

    return data?.intents ?? []
}

export const getBestIntent = (intents: Intent[]): Intent | undefined => {
    const sorted = intents.sort((a, b) => a.confidence < b.confidence ? 1 : -1 )

    return sorted.length > 0 ? sorted[0] : undefined
}

export async function replyForMessage(message: string) {

    // Normally should throw error
    if(!message) return

    const intents = await getIntentsFromApi(message)

    const bestIntent = getBestIntent(intents)

    if(!bestIntent || bestIntent.confidence < MIN_CONFIDENCE_LEVEL) return DEFAULT_AI_ANSWER

    const resp = await getReplyforIntent(bestIntent.name)

    return resp.message
}