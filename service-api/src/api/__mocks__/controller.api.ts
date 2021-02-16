export const messageReply = 'Hello, how can I help you?'

export async function getReplyforIntent(intentName: string) {
   return {
       success: true,
       message: messageReply
   }
}