import { getNewModelObject } from './IntentMessage'

describe('New Object Model', () => {
    it('should have specific values in the creation object', () => {

        const intentMessage = {
                intentName: 'hello',
                message: 'Wohoo! You are here already?'
        }
        expect(getNewModelObject(intentMessage)).toStrictEqual(intentMessage)
    })
})