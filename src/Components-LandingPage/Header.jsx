import React from "react";
import "./Header.css";
import Logo from "../assets/LandingPageAssets/Logo.png";
const Header = () => {
  return (
    <header className="prp-LandingPage-header">
      <a href="#home" className="prp-LandingPage-brand">
        <img src={Logo} alt="Placement and Recruitment Platform logo" />
        <span>Placement &amp;<br />Recruitment Platform</span>
      </a>
      <nav className="prp-LandingPage-navigation">
        <a href="#home" className="prp-LandingPage-navLink active">Home</a>
        <a href="#features" className="prp-LandingPage-navLink">Features</a>
        <a href="#recruiters" className="prp-LandingPage-navLink">For Recruiters/Employers</a>
        <a href="#training" className="prp-LandingPage-navLink">For Training Institutions</a>
        <a href="#success-stories" className="prp-LandingPage-navLink">Success Stories</a>
      </nav>
      <div className="prp-LandingPage-headerActions">
        <a href="/login" className="prp-LandingPage-loginButton">Login</a>
        <a href="/register" className="prp-LandingPage-registerButton">Register</a>
      </div>
    </header>
  );
};
export default Header;