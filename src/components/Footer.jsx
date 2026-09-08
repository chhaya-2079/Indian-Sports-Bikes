import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            INDIAN<span>BIKES</span>
          </Link>

          <p>
            Discover India's exciting world of sports, performance and powerful
            motorcycles.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <span>Instagram</span>
          <span>Facebook</span>
          <span>YouTube</span>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Indian Bikes. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
