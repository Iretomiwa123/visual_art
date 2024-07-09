import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 wrapper100">
      <div id="footer">
        <div className="container wrapper80">
          <div className="row">
            <div className="col-md-4 mb-3">
              <h4>EXPLORE</h4>
              <ul className="list-unstyled">
                <li>
                  <Link to="/sell" className="text-light">
                    Sell art on Art World
                  </Link>
                </li>
                <li>
                  <Link to="/story" className="text-light">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link to="/initiatives" className="text-light">
                    Our initiatives
                  </Link>
                </li>
                <li>
                  <Link to="/features" className="text-light">
                    Product Features
                  </Link>
                </li>
                <li>
                  <Link to="/collectors" className="text-light">
                    Collectors Showcase
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4 mb-3">
              <h4>SUPPORT</h4>
              <ul className="list-unstyled">
                <li>
                  <Link to="/inspired" className="text-light">
                    Get Inspired
                  </Link>
                </li>
                <li>
                  <Link to="/faqs" className="text-light">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-light">
                    Get in Touch
                  </Link>
                </li>
                <li>
                  <Link to="/terms-creators" className="text-light">
                    Terms for Creators
                  </Link>
                </li>
                <li>
                  <Link to="/return-policy" className="text-light">
                    Return Policy
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="text-light">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-service" className="text-light">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/refund-policy" className="text-light">
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <p>For promos & giveaways</p>
              <input
                type="email"
                className="form-control mb-3 bg-dark text-light placeholder:text-light"
                placeholder="Enter your email here"
                aria-label="Email"
              />
              <p>
                Get exclusive vouchers & deals, tips, and inspiring gist to put
                heart in your space!
              </p>
              <p>CONNECT WITH US ON ALL OUR SOCIALS</p>
              <div>
                <a href="https://twitter.com" className="text-light me-2">
                  <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
                </a>
                <a href="https://instagram.com" className="text-light me-2">
                  <i className="fa fa-brands fa-instagram fa-2x"></i>
                </a>
                <a href="https://facebook.com" className="text-light">
                  <i className="fa fa-facebook fa-2x" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <p>&copy; 2024 Art World. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
