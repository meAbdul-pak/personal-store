import { Routes, Route } from 'react-router-dom'

import Navbar1 from './Component/Navbar1'
import Footer from './Component/Footer'
import Home from './Component/Home'
import Products from './Component/Products'
import ContactForm from './Component/ContactForm'
import About from './Component/About'
import ProductDetails from './Component/ProductDetails'
import Cart from './Component/Cart'

function App() {

  return (
    <>
      <Navbar1 />

      <Routes>

        <Route
          path='/products/:id'
          element={<ProductDetails />}
        />

        <Route
          path='/'
          element={<Home />}
        />

        <Route
          path='/cart'
          element={<Cart />}
        />

        <Route
          path='/products'
          element={<Products />}
        />

        <Route
          path='/contact'
          element={<ContactForm />}
        />

        <Route
          path='/about'
          element={<About />}
        />

      </Routes>

      <Footer />
    </>
  )
}

export default App