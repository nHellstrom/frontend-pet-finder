import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__half footer__lefthalf">
        <h5>Fauni</h5>
        <sub>
          <ul className="footer__infotext">
            <li>Contact Information</li>
            <li>Contact Information</li>
          </ul>
        </sub>
      </div>
      <div className="footer__half footer__righthalf">
        <Link to="/" className="footer__link">
          Home
        </Link>
        <Link to="/map" className="footer__link">
          Map
        </Link>
        <Link to="/reportlostcat" className="footer__link">
          Lost Cat
        </Link>
        <Link to="/reportfoundcat" className="footer__link">
          Found Cat
        </Link>
        <Link to="/about" className="footer__link">
          About Us
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
