import mongoose from 'mongoose'
import dotenv from 'dotenv'
import color from 'colors'

import users from './data/users.js'
import products from './data/products.js'

import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'

import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
	try {
		// Clean Collections
		await Order.deleteMany()
		await Product.deleteMany()
		await User.deleteMany()

		// Add Users
		const createdUsers = await User.insertMany(users)
		const adminUser = createdUsers[0]._id

		// Add Products
		const sampleProducts = products.map((product) => ({
			...product,
			user: adminUser,
		}))
		await Product.insertMany(sampleProducts)

		console.log('Data Imported!'.green.inverse)
		process.exit(0)
	} catch (error) {
		console.error(`Error: ${error.message}`.red.inverse)
		process.exit(1)
	}
}

const destroyData = async () => {
	try {
		// Clean Collections
		await Order.deleteMany()
		await Product.deleteMany()
		await User.deleteMany()

		console.log('Data Destroyed!'.red.inverse)
		process.exit(0)
	} catch (error) {
		console.error(`Error: ${error.message}`.red.inverse)
		process.exit(1)
	}
}

// Command line argument
if (process.argv[2] === '-d') {
	destroyData()
} else {
	importData()
}
