const MONGO_DB = 'service-controller'

// mongo is mongodb docker container
const MONGO_DEV_URL = `mongodb://mongo:27017/${MONGO_DB}`
export const CONFIG = {
	MONGO: {
		URL: process.env.MONGO_DB || MONGO_DEV_URL,
	},
}
