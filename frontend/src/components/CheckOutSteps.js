import React from 'react'
import { Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CheckOutSteps = ({step1, step2, step3, step4}) => {
    return (
        <Nav className='justify-content-center mb-4'>
            <NavItem>
                {step1 ? (<LinkContainer to='/login'>
                    <Nav.Link>Sign in</Nav.Link>
                </LinkContainer>) : (<Nav.Link disabled> Sign in
                </Nav.Link>)}
            </NavItem>

            <NavItem>
                {step2 ? (<LinkContainer to='/shipping'>
                    <Nav.Link>Shipping</Nav.Link>
                </LinkContainer>) : (<Nav.Link disabled> Shipping
                </Nav.Link>)}
            </NavItem>

            <NavItem>
                {step3 ? (<LinkContainer to='/payment'>
                    <Nav.Link>Payment</Nav.Link>
                </LinkContainer>) : (<Nav.Link disabled> Payment
                </Nav.Link>)}
            </NavItem>

            <NavItem>
                {step4 ? (<LinkContainer to='/placeOrder'>
                    <Nav.Link>Place Order</Nav.Link>
                </LinkContainer>) : (<Nav.Link disabled> Place Order
                </Nav.Link>)}
            </NavItem>

        </Nav>
    )
}

export default CheckOutSteps
