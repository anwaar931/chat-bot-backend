import axios from 'axios'

const _api = axios.create({
    baseURL: 'https://chat.ultimate.ai/api'
})

const apiKey: string = String(process.env.ULTIMATE_AI_API_KEY)

export interface ApiBody {
    message: string
    botId: string
    conversationId: string
}

export async function possibleIntentsForMessage(apiBody: ApiBody) {
    const resp = await _api.post('intents', apiBody, {
        headers: {
            'authorization': apiKey
        }
    })

    return resp.data
}

