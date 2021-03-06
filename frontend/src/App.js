import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './screens/HomeScreen'
import Product from './screens/ProductScreen'
import { Container } from 'react-bootstrap'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen';
import Register from './screens/RegisterScreen';
import Profile from './screens/ProfileScreen';
import Shipping from './screens/ShippingScreen';
import Payment from './screens/PaymentScreen'
import PlaceOrder from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen'
const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/shipping' component={Shipping} />
          <Route path='/order/:id' component={OrderScreen} />
          <Route path='/payment' component={Payment} />
          <Route path='/placeOrder' component={PlaceOrder} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={Register} />
          <Route path='/profile' component={Profile} />
          <Route path='/product/:id' component={Product} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/admin/userList' component={UserListScreen} />
          <Route path='/admin/productList' component={ProductListScreen} exact/>
          <Route
            path='/admin/productList/:pageNumber'
            component={ProductListScreen}
            exact
          />
          <Route path='/admin/orderlist' component={OrderListScreen} />
          <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          <Route path='/search/:keyword' component={Home} exact/>
          <Route path='/page/:pageNumber' component={Home} exact/>
          <Route path='/search/:keyword/page/:pageNumber' component={Home} exact />
          <Route path='/' component={Home} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

// Check for CartScreen.js
// 1. Deletion of product from cart page.
// 2. Refresh. So, it refreshes with URL and adds the current product to cart