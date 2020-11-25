import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Image, Carousel } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './ErrorMessage'
import { listTopProducts } from '../actions/productActions'

const ProductCarousel = () => {
    const dispatch = useDispatch()

    const productTopRated = useSelector((state) => state.topProduct)
    const { loading, error, products } = productTopRated

    useEffect(() => {
        dispatch(listTopProducts())
    }, [dispatch])

    return loading ? (
        <Loader />
    ) : error ? (
        <Message variant='danger'>{error}</Message>
    ) : (
        <Carousel pause='hover' className='bg-dark'>
            {products.map((product) => (
                <Carousel.Item key={product._id} >
                    <Link to={`/product/${product._id}`}>
                        <Image src={product.image} alt={product.name} fluid />
                        <Carousel.Caption className='carousel-caption'>
                            <h3>
                                {product.name} (₹ {Math.round(product.price * 70)})
                            </h3>
                        </Carousel.Caption>
                    </Link>
                </Carousel.Item>
            ))}
        </Carousel>
        )
}

export default ProductCarousel