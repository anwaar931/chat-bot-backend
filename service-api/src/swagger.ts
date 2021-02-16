import swaggerUi from 'swagger-ui-express'

export const swaggerDocument: swaggerUi.SwaggerOptions = {
    openapi: '3.0.1',
    info: {
        version: '1.0.0',
        title: 'Chat Api',
        description: 'Chat Api',
    },
    servers: [
        {
            url: 'http://localhost:8001/api',
            description: 'local server'
        }
    ],
    paths: {
        "/chat": {
            "post": {
                description: "Returns reply to the message",
                operationId: 'postChat',
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                properties: {
                                    message: {
                                        type: "string",
                                        example: "Hello!"
                                    },
                                }
                            }
                        },
                    },
                    description: "Message that needs a reply"
                },
                responses: {
                    "200": {          
                        description: "Reply of the message",
                        "content": {
                            "application/json": {
                                "schema": {
                                   properties: {
                                       reply: {
                                           type: "string",
                                           example: 'Hello, How can I help you?',
                                           description: 'AI reply'
                                       },
                                       success: {
                                           type: 'boolean',
                                           example: true,
                                           description: 'true if everything is good.'
                                       }
                                   }
                                }
                            }
                        }
                    }
                }
            } 
        },
      "/health": {
          "get": {
              description: "Check if service is running and healthy",
              responses: {
                "200": {          
                    description: "Ok",
                }
            }
          }
      }
    }
}