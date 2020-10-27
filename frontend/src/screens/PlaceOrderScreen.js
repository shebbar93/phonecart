import React, { useState } from 'react'
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/ErrorMessage'
import CheckOut from '../components/CheckOutSteps'
import { Link } from 'react-router-dom'

const PlaceOrderScreen = () => {
    const cart = useSelector(state => state.cart)
    //Calculate Prices
    cart.itemsPrice = cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    cart.shippingPrice = cart.itemsPrice > 100 ? 0 : 10
    cart.taxPrice = Number((0.15 * cart.itemsPrice)).toFixed(2)
    cart.totalPrice = (Number(cart.itemsPrice) + Number(cart.taxPrice) + Number(cart.shippingPrice)).toFixed(2)
    const placeOrderHandler = () => {

    }

    return (
        <>
            <CheckOut step1 step2 step3 step4></CheckOut>
            <Row>
                <Col md={8}>
                    <ListGroup variant='flush'>

                        <ListGroup.Item>
                            <h2>Shipping</h2>
                            <p>
                                <strong>
                                    Address :
                                </strong>
                                {cart.shippingAddress.address}, {cart.shippingAddress.city}, {cart.shippingAddress.postalCode}, {cart.shippingAddress.country}
                            </p>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h2>Payment Method</h2>
                            <p>
                                <strong>
                                    Method :
                                </strong>
                                {cart.paymentMethod}
                            </p>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h2>Ordered Items</h2>
                            {cart.cartItems.length === 0 ? <Message>Your Cart is Empty </Message> : (
                                <ListGroup variant='flush'>
                                    {cart.cartItems.map((item, index) => (
                                        <ListGroup.Item key={index}>
                                            <Row>
                                                <Col md={1}>
                                                    <Image src={item.image} alt={item.name} fluid rounded />
                                                </Col>
                                                <Col>
                                                    <Link to={`product/${item.product}`}> {item.name} </Link>
                                                </Col>
                                                <Col md={4}>
                                                    {item.qty} x ₹{Math.round(item.price * 70)} = ₹{item.qty * Math.round(item.price * 70)}
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            )}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={4}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>
                                    Order Summary
                                </h2>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Items</Col>
                                    <Col>₹{Math.round(cart.itemsPrice * 70)}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Shipping</Col>
                                    <Col>₹{Math.round(cart.shippingPrice * 70)}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Tax</Col>
                                    <Col>₹{Math.round(cart.taxPrice * 70)}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Total</Col>
                                    <Col>₹{Math.round(cart.totalPrice * 70)}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button type='button' className='btn-block' disabled={cart.cartItems = 0} onClick={placeOrderHandler}> Place Order </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default PlaceOrderScreen
