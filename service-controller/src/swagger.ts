import swaggerUi from 'swagger-ui-express'

export const swaggerDocument: swaggerUi.SwaggerOptions = {
    openapi: '3.0.1',
    info: {
        version: '1.0.0',
        title: 'Controller Api',
        description: 'Controller Api',
    },
    servers: [
        {
            url: 'http://localhost:8002',
            description: 'local server'
        }
    ],
    paths: {
        "/create/reply/intent": {
            "put": {
                description: "Creates a reply for an intent",
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                properties: {
                                    message: {
                                        type: "string",
                                        example: "Hello! How can I help you?"
                                    },
                                    intentName: {
                                        type: "string",
                                        example: "Greeting"
                                    }
                                }
                            }
                        },
                    },
                    description: "Intent name and message"
                },
                responses: {
                    "200": {          
                        description: "response of creating",
                        "content": {
                            "application/json": {
                                "schema": {
                                   properties: {
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
        "/delete/reply/intent": {
            "delete": {
                description: "Deletes a reply for an intent",
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                properties: {
                                    intentName: {
                                        type: "string",
                                        example: "Greeting"
                                    }
                                }
                            }
                        },
                    },
                    description: "intent name"
                },
                responses: {
                    "200": {          
                        description: "response of deleting",
                        "content": {
                            "application/json": {
                                "schema": {
                                   properties: {
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
        "/reply/intent": {
            "get": {
                description: "Get a reply for an intent",
                parameters: [
                    {
                      name: "name",
                      in: "query",
                      description: "Find reply for this intent",
                      "required": true,
                      "explode": true,
                      "schema": {
                        "type": "string",
                      }
                    }
                ],
                responses: {
                    "200": {          
                        description: "Reply with message reply from db",
                        "content": {
                            "application/json": {
                                "schema": {
                                   properties: {
                                    message: {
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