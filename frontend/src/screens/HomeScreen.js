import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Meta from '../components/Meta'
import Product from '../components/Product'
import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'
import Error from '../components/ErrorMessage'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import { PRODUCT_DETAIL_RESET } from '../const/productConst'
const HomeScreen = ({ match }) => {
    const keyword = match.params.keyword
    const pageNumber = match.params.pageNumber || 1;
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList)

    const { error, products, loading, page, pages } = productList

    useEffect(() => {
        dispatch({ type: PRODUCT_DETAIL_RESET })
        dispatch(listProducts(keyword, pageNumber))
    }, [dispatch, keyword, pageNumber])

    return (
        <>
            <Meta/>
            {!keyword ? (
                <ProductCarousel />
            ) : (
                    <Link to='/' className='btn btn-light'>
                        Go Back
                    </Link>
                )}
            <h1>Latest products</h1>
            {loading ? <Loader /> : error ? <Error variant='danger'> {error} </Error> : (
            <>
            <Row>
                {products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product}> </Product>
                    </Col>
                ))}
            </Row>
            <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} />
            </>
            )}
        </>
    )
}

export default HomeScreen