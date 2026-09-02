import { Link } from "react-router-dom";
import useThemeStore from "../store/themeStore";
import useCartStore from "../store/cartStore";
import { useEffect } from "react";

const Navbar1 = () => {
  const cartCount = useCartStore((state) =>
    state.cart.reduce(
      (total, item) => total + item.quantity,
      0
    )
  );

  const darkMode = useThemeStore((state) => state.darkMode);
  const toggleDarkMode = useThemeStore(
    (state) => state.toggleDarkMode
  );

  useEffect(() => {
    document.body.classList.toggle("dark-mode" , darkMode);
  },[darkMode]);

  return (
    <nav className="navbar">
      <h2>
        <Link to="/">Personal Store</Link>
      </h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>

        <Link to="/cart" className="cart-link">
          🛒
          {cartCount > 0 && (
            <span className="cart-badge">{cartCount}</span>
          )}
        </Link>

        <button
          className="theme-toggle"
          onClick={toggleDarkMode}
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar1;