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
    <div className="prp-LandingPage-bottomFooter">
      <div className="prp-LandingPage-footerColumns">
        {footerSections.map((section) => (
          <div className="prp-LandingPage-footerColumn" key={section.title}>
            <h3 className="prp-LandingPage-footerColumnTitle">{section.title}</h3>
            {section.links.map((link) => (
              <a className="prp-LandingPage-footerLinkItem" href={link.href} key={link.label}>{link.label}</a>
            ))}
          </div>
        ))}
      </div>
      <div className="prp-LandingPage-footerBottomLine">
        <p className="prp-LandingPage-copyrightText">© 2026 Placement and Recruitment Platform.</p>
        <div className="prp-LandingPage-socialMediaList">
          <a href="https://www.facebook.com/" aria-label="Facebook"><img className="prp-LandingPage-facebookIcon" src={FacebookIcon} alt="Facebook" /></a>
          <a href="https://x.com/" aria-label="X"><img className="prp-LandingPage-xSocialIcon" src={XIcon} alt="X" /></a>
          <a href="https://www.instagram.com/" aria-label="Instagram"><img className="prp-LandingPage-instagramIcon" src={InstagramIcon} alt="Instagram" /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;