import axios from 'axios'

const _api = axios.create({
    baseURL: process.env.SERVICE_CONTROLLER || 'http://localhost:8002'
})

export async function getReplyforIntent(intentName: string) {
    const resp = await _api.get(`reply/intent?name=${intentName}`)

    return resp.data
}

