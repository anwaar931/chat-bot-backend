import { createReply, deleteReply, findReply } from './intent-message.service'
import { DEFAULT_NOT_FOUND_REPLY } from '../constants/DefaultReply'

describe('create reply with message and intent', () => {
    let mockCreateIntentMessage: jest.SpyInstance<any, unknown[]>
    

    beforeEach(() => {
        jest.clearAllMocks()
        
        mockCreateIntentMessage = jest.spyOn(require('../models/IntentMessage') , 'createIntentMessage')
        mockCreateIntentMessage.mockImplementation(() => Promise.resolve(true))
    })

    it('should return true', async () => {
        const intentMessage = {
            intentName: 'hello',
            message: 'this is a message'
        }
        expect(await createReply(intentMessage)).toStrictEqual(true)

        expect(mockCreateIntentMessage.mock.calls[0][0]).toStrictEqual(intentMessage)

        expect(mockCreateIntentMessage.mock.calls.length).toBe(1)
    })
})

describe('delete reply in db', () => {
    let mockDeleteIntentMessage: jest.SpyInstance<any, unknown[]>

    beforeEach(() => {
        jest.clearAllMocks()

        mockDeleteIntentMessage = jest.spyOn(require('../models/IntentMessage') , 'deleteIntentReply')
        mockDeleteIntentMessage.mockImplementation(() => Promise.resolve(true))
    })

    it('should return true', async () => {
        const intentName = 'Greetings'
        expect(await deleteReply(intentName)).toBe(true)

        expect(mockDeleteIntentMessage.mock.calls[0][0]).toBe(intentName)

        expect(mockDeleteIntentMessage.mock.calls.length).toBe(1)
    })
})


describe('Find Reply in db', () => {

    let mockFindIntentMessage: jest.SpyInstance<any, unknown[]>
    const message = 'hello, how are you today?'
    const intentNameFound = 'found'

    beforeEach(() => {
        jest.clearAllMocks()

        mockFindIntentMessage = jest.spyOn(require('../models/IntentMessage') , 'findIntentWithReply')
        mockFindIntentMessage.mockImplementation((intentName) => {
            if(intentName === intentNameFound)
                return Promise.resolve({
                    intentName: intentNameFound,
                    message: message,
                })
            return
        })
    })

    it('should find the reply and return', async () => {
        expect(await findReply(intentNameFound)).toBe(message)

        expect(mockFindIntentMessage.mock.calls[0][0]).toBe(intentNameFound)

        expect(mockFindIntentMessage.mock.calls.length).toBe(1)
    })

    it('should return default message as reply not found', async () => {
        expect(await findReply('random')).toBe(DEFAULT_NOT_FOUND_REPLY)

        expect(mockFindIntentMessage.mock.calls[0][0]).toBe('random')

        expect(mockFindIntentMessage.mock.calls.length).toBe(1)
    })
})