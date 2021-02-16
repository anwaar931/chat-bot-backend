# Chat-bot-backend
It's a sample chat bot backend app, using **Ultimate.ai** API for returning visiter message replies. 
Added unit tests for services.
> This is not production ready.

## Workflow
There are two NodeJs services, which are running with ExpressJs.
### service-api
- Visitors can send a **POST** request to service-api with message in json body.
-  SwaggerFile is in service-api folder
- Currently we are assuming minimum confidence level 0.5

### service-controller
- It will handle service-api request to get message according to intent from mongoDB
- It can add/delete intents with messages.
- These intents which we will add can be used for visitors to receiver replies.
- If there is no matching intent in DB it will send a default reply.

## Assumptions & decisions
- Didn't add any Authorization in service-api for visitor also no rate-limiting. 
- Assuming that the requirement is to create a Public API for visitor to receive message and respond with messages depending up on intents from ultimate.ai API.
- Need to have few example intents with messages in mongo DB for testing the complete functionality.
- Assuming that **conversation_id** will come from a system where we or visitor is storing the conversations so currently just added a constant.
- **bot_id** not generating bot id but just using an example mongoDB ObjectId for the sake of using API. We can generate bot_id if we will manage sessions with the visitor. Visitor can also manage bots on his own depending upon the requirements.

## Instructions to run the App

### Install
- Have Node.js >= 14
- `npm install` in both services.
-  Add .env file in service-api with variable and value **`ULTIMATE_AI_API_KEY`**

### Run with Docker

-  Install docker [https://docs.docker.com/install/#supported-platforms](https://docs.docker.com/install/#supported-platforms)
- -   Be sure to have docker compose  `docker-compose -v`.  [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)
- Run `make build` in root to build containers for both services
- Run `make run`  in root for running the services

### Run Unit Tests
Run `make test` in root

### Development Port assignments:
- `8001` service-api
- `8002` service-controller

