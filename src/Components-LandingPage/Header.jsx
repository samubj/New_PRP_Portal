import React from "react";
import "./Header.css";
import Logo from "../assets/LandingPageAssets/Logo.png";

const Header = () => {
  return (
    <header className="prp-Header-container">
      <a href="#home" className="prp-Header-brand">
        <img src={Logo} alt="Placement and Recruitment Platform logo" />
        <span>Placement &amp;<br />Recruitment Platform</span>
      </a>
      <nav className="prp-Header-navigation">
        <a href="#home" className="prp-Header-navLink active">Home</a>
        <a href="#features" className="prp-Header-navLink">Features</a>
        <a href="#recruiters" className="prp-Header-navLink">For Recruiters/Employers</a>
        <a href="#training" className="prp-Header-navLink">For Training Institutions</a>
        <a href="#success-stories" className="prp-Header-navLink">Success Stories</a>
      </nav>
      <div className="prp-Header-actions">
        <a href="/login" className="prp-Header-loginButton">Login</a>
        <a href="/register" className="prp-Header-registerButton">Register</a>
      </div>
    </header>
  );
};

export default Header;