import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'; // Import custom CSS for styling

const Header = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [showRentOptions, setShowRentOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const toggleRentOptions = () => {
    setShowRentOptions(!showRentOptions);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">Your Logo</a>
          <button className="navbar-toggler" type="button" onClick={toggleOptions}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${showOptions ? 'show' : ''}`}>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" onClick={toggleRentOptions}>
                  Rent
                </a>
                {showRentOptions && (
                  <div className="dropdown-menu show" aria-labelledby="navbarDropdown">
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Popular Choices</a>
                    <a className="dropdown-item" href="#">Owner Properties</a>
                    <a className="dropdown-item" href="#">Verified Properties</a>
                    <a className="dropdown-item" href="#">Furnished Homes</a>
                    <a className="dropdown-item" href="#">Bachelor Friendly Homes</a>
                    <a className="dropdown-item" href="#">Immediately Available</a>


                    <div className="dropdown-divider"></div>
                    
                    <h6 className="dropdown-header">Property Types</h6>
                    <a className="dropdown-item" href="#">Flat for rent in Mumbai</a>
                    <a className="dropdown-item" href="#">House for rent in Mumbai</a>
                    <a className="dropdown-item" href="#">Villa for rent in Mumbai</a>
                    <a className="dropdown-item" href="#">PG in Mumbai</a>
                    <a className="dropdown-item" href="#">Office Space in Mumbai</a>
                    <a className="dropdown-item" href="#">Commercial Space in Mumbai</a>
                    <a className="dropdown-item" href="#">Coworking Space in Mumbai</a>
                    <a className="dropdown-item" href="#">Coliving Space in Mumbai</a>
                    <a className="dropdown-item" href="#">Student Hostels in Mumbai</a>
                    <a className="dropdown-item" href="#">Luxury PG in Mumbai</a>
                    
                    <div className="dropdown-divider"></div>
                    
                    <h6 className="dropdown-header">Budget</h6>
                    <a className="dropdown-item" href="#">Under ₹ 10,000</a>
                    <a className="dropdown-item" href="#">₹ 10,000 - ₹ 15,000</a>
                    <a className="dropdown-item" href="#">₹ 15,000 - ₹ 25,000</a>
                    <a className="dropdown-item" href="#">Above ₹ 25,000</a>
                    
                    <div className="dropdown-divider"></div>

                    <h6 className="dropdown-header">Explore</h6>
                    <a className="dropdown-item" href="#">Localities</a>
                    <a className="dropdown-item" href="#">Buy Vs Rent</a>
                    <a className="dropdown-item" href="#">Find an Agent</a>
                    <a className="dropdown-item" href="#">Share Requirement</a>

                    <div className="dropdown-divider"></div>
                    <h6 className="dropdown-header">Property Services</h6>
                    <a className="dropdown-item" href="#">Rent Agreement</a>
                  </div>
                )}
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Buy</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Sell</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Home Loan</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Property Service</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Help</a>
              </li>
            </ul>
            <div className="navbar-nav">
              <a className="nav-link" href="#">Login</a>
              <a className="nav-link" href="#">Signup</a>
              <a className="nav-link" href="#">Favorites</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
