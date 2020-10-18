import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './screens/HomeScreen'
import Product from './screens/ProductScreen'
import { Container } from 'react-bootstrap'
const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={Home} exact />
          <Route path='/product/:id' component={Product} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
