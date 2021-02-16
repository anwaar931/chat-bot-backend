const MONGO_DB = 'service-controller'

// ${mongo} is mongodb docker container, docker compose will create it.
// If you want to test it on local you can use localhost instead
const MONGO_DEV_URL = `mongodb://mongo:27017/${MONGO_DB}`
export const CONFIG = {
	MONGO: {
		URL: process.env.MONGO_DB || MONGO_DEV_URL,
	},
}
