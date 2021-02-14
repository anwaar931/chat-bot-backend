import * as mongoose from 'mongoose'
import { CONFIG } from './config'

const MONGO_OPTIONS = {
	useNewUrlParser: true,
	reconnectTries: Number.MAX_VALUE,
	reconnectInterval: 1000,
	useFindAndModify: false,
	useCreateIndex: true,
	useUnifiedTopology: true,
}

mongoose.connect(CONFIG.MONGO.URL, MONGO_OPTIONS)

mongoose.connection
	.on('error', console.error.bind(console, 'Mongo error'))
	.on('open', console.log.bind(console, 'Mongo connected'))
