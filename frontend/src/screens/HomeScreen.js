import React, { useEffect } from 'react'
import Product from '../components/Product'
import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'
import Error from '../components/ErrorMessage'
import Loader from '../components/Loader'
import { PRODUCT_DETAIL_RESET } from '../const/productConst'
const HomeScreen = () => {

    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList)

    const { error, products, loading } = productList

    useEffect(() => {
        dispatch({ type : PRODUCT_DETAIL_RESET })
        dispatch(listProducts())
    }, [dispatch])
    
    return (
        <>
            <h1>Latest products</h1>
            {loading ? <Loader/> : error ? <Error variant='danger'> {error} </Error> : <Row>
                {products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product}> </Product>
                    </Col>
                ))}
            </Row>}


        </>
    )
}

export default HomeScreen