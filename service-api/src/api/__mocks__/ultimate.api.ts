import { ApiBody } from '../ultimate.api'
import { ultimateApiResponse, ultimateApiResponseLowConfidence, lowConfidenceMessage } from '../__fixtures__/ultimate-api-response'

export async function possibleIntentsForMessage(apiBody: ApiBody) {
    if(apiBody.message === lowConfidenceMessage) {
        return ultimateApiResponseLowConfidence
    }

    return ultimateApiResponse
}