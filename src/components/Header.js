import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="navbar">
      <div className="logo">
        <p>NXV</p>
      </div>
      <div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#" className="nav-links">
              Design Express
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-links">
              Showcase
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-links">
              About N
            </a>
          </li>
        </ul>
      </div>
      <div>
        <button className="btn">Brochure</button>
        <button className="btn">New Project</button>
      </div>
    </div>
  );
}

export default Header;
