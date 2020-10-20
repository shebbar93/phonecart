import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { productListReducer, productDetailReducer } from './reducers/productReducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import { cartReducer } from './reducers/cartReducers'
const reducer = combineReducers({
    productList: productListReducer,
    listProductDetail: productDetailReducer,
    cart: cartReducer
})

const localStorageCartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

const initialState = {
    cart: {
        cartItems: localStorageCartItems
    }
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store