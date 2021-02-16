jest.mock('../api/ultimate.api.ts')
jest.mock('../api/controller.api.ts')

import { BOT_ID, getBestIntent, getIntentsFromApi, replyForMessage, DEFAULT_AI_ANSWER } from './chat.service'
import { ultimateApiResponse, lowConfidenceMessage } from '../api/__fixtures__/ultimate-api-response'
import { controllerResponse } from '../api/__fixtures__/controller.api.response'

describe('BOT ID should be fine', () =>  {
    it('should be defined', () => {
        expect(BOT_ID).toBeDefined()
    })

    it('its length should be 24', () => {
        expect(BOT_ID).toHaveLength(24)
    })
})

describe('Get intents from api', () => {
    it('should return array of intents', async () => {
        expect(await getIntentsFromApi('hello')).toStrictEqual(ultimateApiResponse.intents)
    })
})

describe('Get best intent', () => {
    it('should return undefined', () => {
        expect(getBestIntent([])).toBe(undefined)
    })

    it('should return the best confidence intent', () => {
        expect(getBestIntent(ultimateApiResponse.intents)).toBe(ultimateApiResponse.intents[0])
    })
})

describe('Get reply for the message', () => {

    it('should return undefined if message is empty', async () => {
        expect(await replyForMessage('')).toBe(undefined)
    })

    it('should return message for Hello', async () => {
        expect(await replyForMessage('Hello')).toBe(controllerResponse.message)
    })

    it('shoudl return default low confidence message', async () => {
        expect(await replyForMessage(lowConfidenceMessage)).toBe(DEFAULT_AI_ANSWER)
    })

})

