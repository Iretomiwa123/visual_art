import React from "react";
import { Link } from "react-router-dom";
import image from "@/assets/TITLE.svg";

const Header = () => (
  <header className="bg-light py-3">
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to="/">
          <img src={image} alt="Art World" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/#gallery">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/artist">
                Artist
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/collections">
                Collections
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/stories">
                Stories
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sell">
                Sell on Art World
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <i className="fa fa-cart-plus" aria-hidden="true"></i>
                <span className="sr-only">Cart</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/search">
                <i className="fa fa-search" aria-hidden="true"></i>
                <span className="sr-only">Search</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
