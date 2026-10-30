import React from "react";
import "./Header.css";
import Logo from "../assets/LandingPageAssets/Logo.png";

const Header = () => {
  return (
    <div className="prp-LandingPage-topHeader">
      <a href="#home" className="prp-LandingPage-brandArea">
        <img src={Logo} alt="Placement and Recruitment Platform logo" className="prp-LandingPage-brandPicture" />
        <span className="prp-LandingPage-brandTitle">Placement &amp;<br />Recruitment Platform</span>
      </a>
      <nav className="prp-LandingPage-menuLinks">
        <a href="#home" className="prp-LandingPage-homeMenu prp-LandingPage-navLink active">Home</a>
        <a href="#features" className="prp-LandingPage-featuresMenu prp-LandingPage-navLink">Features</a>
        <a href="#recruiters" className="prp-LandingPage-recruitersMenu prp-LandingPage-navLink">For Recruiters/Employers</a>
        <a href="#training" className="prp-LandingPage-trainingMenu prp-LandingPage-navLink">For Training Institutions</a>
        <a href="#success-stories" className="prp-LandingPage-storiesMenu prp-LandingPage-navLink">Success Stories</a>
      </nav>
      <div className="prp-LandingPage-headerActions">
        <a href="/login" className="prp-LandingPage-loginButton">Login</a>
        <a href="/register" className="prp-LandingPage-registerButton">Register</a>
      </div>
    </div>
  );
};

export default Header;