const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-col">
          <h2>Personal Store</h2>
          <p>
            Quality products, best prices. Aapki zaroorat, hamari zimmedari.
          </p>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Customer Service</h3>
          <ul>
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Returns & Refunds</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Track Order</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Get in Touch</h3>
          <p>📍 Lahore, Pakistan</p>
          <p>📞 +92 328 0466554</p>
          <p>✉️ support@personalstore.com</p>

          <div className="footer-socials">
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="Twitter">🐦</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Personal Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;