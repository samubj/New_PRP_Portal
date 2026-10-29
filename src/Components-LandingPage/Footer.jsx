import React from "react";
import "./Footer.css";
import FacebookIcon from "../assets/LandingPageAssets/FacebookIcon.png";
import XIcon from "../assets/LandingPageAssets/XIcon.png";
import InstagramIcon from "../assets/LandingPageAssets/InstagramIcon.png";

const footerSections = [
  { title: "COMPANY", links: [{ label: "About Us", href: "#about" }, { label: "Careers", href: "#careers" }, { label: "Contact", href: "#contact" }] },
  { title: "PLATFORM", links: [{ label: "Job Postings", href: "#features" }, { label: "AI Resume Matching", href: "#features" }, { label: "Training & Skill Readiness", href: "#training" }, { label: "Placement Analytics", href: "#features" }] },
  { title: "SUPPORT", links: [{ label: "Help Center", href: "#help" }, { label: "FAQ", href: "#faq" }, { label: "Raise Issue", href: "#support" }, { label: "Contact Support", href: "#contact" }] },
  { title: "LEGAL", links: [{ label: "Privacy Policy", href: "#privacy" }, { label: "Terms & Conditions", href: "#terms" }, { label: "Cookie Policy", href: "#cookies" }] }
];

const Footer = () => {
  return (
    <footer className="prp-Footer-container">
      <div className="prp-Footer-columns">
        {footerSections.map((section) => (
          <div className="prp-Footer-column" key={section.title}>
            <h3>{section.title}</h3>
            {section.links.map((link) => (
              <a href={link.href} key={link.label}>{link.label}</a>
            ))}
          </div>
        ))}
      </div>
      <div className="prp-Footer-bottom">
        <p>© 2026 Placement and Recruitment Platform.</p>
        <div className="prp-Footer-socialLinks">
          <a href="https://www.facebook.com/" aria-label="Facebook"><img src={FacebookIcon} alt="Facebook" /></a>
          <a href="https://x.com/" aria-label="X"><img src={XIcon} alt="X" /></a>
          <a href="https://www.instagram.com/" aria-label="Instagram"><img src={InstagramIcon} alt="Instagram" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;