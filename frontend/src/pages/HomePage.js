import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Axios from 'axios'
import Product from '../components/Product'

const HomePage = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await Axios.get('/api/products')
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomePage
