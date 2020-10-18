import React from 'react'
import { Alert } from 'react-bootstrap'

const ErrorMessage = ({ variant, error }) => {
    return (
        <Alert variant={variant}>
            {error}
        </Alert>


        //ALTERNATIVE is to use CHILDREN datatype property by react
        //by taking 2nd parameter as props and passing the data from the tag element
        //Something like : <Error variant='danger'> {error} </Error>
        //const ErrorMessage = ({ variant, children })
        // <Alert variant={variant}>
        //     {children}
        // </Alert>
    )
}

ErrorMessage.defaultProps = {
    variant: 'info'
}
export default ErrorMessage
