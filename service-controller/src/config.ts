const MONGO_DB = 'service-controller'
const MONGO_DEV_URL = `mongodb://localhost:27017/${MONGO_DB}`

export const PORT: number = <any>process.env.PORT || 8314
export const CONFIG = {
	PORT,
	MONGO: {
		URL: process.env.MONGO_DB || MONGO_DEV_URL,
	},
}
