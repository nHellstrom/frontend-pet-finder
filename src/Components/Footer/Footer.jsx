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
            <li>(+46) 0712 345 678 </li>
            <li>Skogskattgatan 12</li>
            <li>Stockholm, Sweden</li>
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
        <Link to="/ReportLostPet" className="footer__link">
          Lost Pet
        </Link>
        <Link to="/ReportFoundPet" className="footer__link">
          Found Pet
        </Link>
        <Link to="/about" className="footer__link">
          About Us
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
