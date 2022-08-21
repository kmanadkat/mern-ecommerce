import { Router } from 'express'
import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'
const router = Router()

// @desc		Fetch All Products
// @route		GET /api/products
// @access	Public
router.get(
	'/',
	asyncHandler(async (req, res) => {
		const products = await Product.find({})
		return res.json(products)
	})
)

// @desc		Fetch single Product
// @route		GET /api/products/:id
// @access	Public
router.get(
	'/:id',
	asyncHandler(async (req, res) => {
		const product = await Product.findById(req.params.id)

		if (product) {
			return res.json(product)
		} else {
			res.status(404)
			throw new Error('Product not found')
		}
		res.json(product)
	})
)

export default router
