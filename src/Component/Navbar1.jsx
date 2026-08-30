import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../ContextApi/CartContext'

const Navbar1 = () => {
  const { cartCount } = useContext(CartContext)

  // Page load hote hi localStorage se dark mode check karo
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode")
    return savedTheme === "true"
  })

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode)
    // Jab bhi darkMode change ho, localStorage mein save kar do
    localStorage.setItem("darkMode", darkMode)
  }, [darkMode])

  return (
    <nav className='navbar'>
      <h2>
        <Link to='/'>Personal Store</Link>
      </h2>

      <div className='nav-links'>
        <Link to='/'>Home</Link>

        <Link to='/products'>Products</Link>

        <Link to='/about'>About</Link>

        <Link to='/contact'>Contact Us</Link>

        <Link to='/cart' className='cart-link'>
          🛒
          {cartCount > 0 && <span className='cart-badge'>{cartCount}</span>}
        </Link>

        <button className='theme-toggle' onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar1