import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'

import productRoutes from './routes/productRoutes.js'
import { notFound, serverError } from './middlewares/errorMiddleware.js'

dotenv.config()
connectDB()

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
	res.send('API is running...')
})

// Products
app.use('/api/products', productRoutes)

// Error Handling
app.use(notFound)
app.use(serverError)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${
			PORT.toString().yellow.bold
		}`
	)
})
