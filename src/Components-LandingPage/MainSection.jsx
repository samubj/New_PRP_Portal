import React from "react";
import "./MainSection.css";
import Header from "./Header";
import Footer from "./Footer";
import heroIllustration from "../assets/LandingPageAssets/heroIllustration.png";
import JobIcon from "../assets/LandingPageAssets/JobIcon.png";
import AIResumeIcon from "../assets/LandingPageAssets/AIResumeIcon.png";
import TrainingIcon from "../assets/LandingPageAssets/TrainingIcon.png";
import AnalyticsIcon from "../assets/LandingPageAssets/AnalyticsIcon.png";
import UsersIcon from "../assets/LandingPageAssets/UsersIcon.png";
import ProfileIcon from "../assets/LandingPageAssets/ProfileIcon.png";
import StarIcon from "../assets/LandingPageAssets/StarIcon.png";
import QuoteIcon from "../assets/LandingPageAssets/QuoteIcon.png";
import GrokLogo from "../assets/LandingPageAssets/GrokLogo.png";
import WiproLogo from "../assets/LandingPageAssets/WiproLogo.png";
import QwenLogo from "../assets/LandingPageAssets/QwenLogo.png";
import DeepSeekLogo from "../assets/LandingPageAssets/DeepSeekLogo.png";
import InfosysLogo from "../assets/LandingPageAssets/InfosysLogo.png";
import ClaudeLogo from "../assets/LandingPageAssets/ClaudeLogo.png";
import OpenAILogo from "../assets/LandingPageAssets/OpenAILogo.png";

const features = [
  { icon: JobIcon, title: "Wide Job Opportunities", description: "Access to thousands of job openings from top companies" },
  { icon: AIResumeIcon, title: "AI Resume Matching", description: "Get matched with the right jobs using AI technology" },
  { icon: TrainingIcon, title: "Training & Skill Readiness", description: "Build in-demand skills with industry-relevant training programs" },
  { icon: AnalyticsIcon, title: "Placement Analytics", description: "Track performance and make data-driven decisions" },
  { icon: UsersIcon, title: "For Every User", description: "Tailored benefits for job seekers, recruiters and training institutions" }
];

const testimonials = [
  { name: "Sarah Chen", role: "Product Designer @ Aura Systems", message: "\"ConnectHire transformed my job search. The AI matching felt intuitive, and within two weeks, I was interviewed and hired by my dream company in fintech. The process was seamless.\"" },
  { name: "Jhon Francis", role: "Recruitment Manager @ Vertex Solutions", message: "\"The community gave me the confidence to showcase my work and connect with amazing people. I got my first full-time offer within 6 months. The support and guidance here are unmatched.\"" },
  { name: "David Miller", role: "Talent Director @ Zenith Capital", message: "\"The quality of candidates on ConnectHire is unmatched. We reduced our time-to-hire by 40% and have found some of our most productive team members through their automated screening.\"" }
];

const companies = [
  { logo: GrokLogo, name: "Grok" },
  { logo: WiproLogo, name: "Wipro" },
  { logo: QwenLogo, name: "Qwen" },
  { logo: DeepSeekLogo, name: "DeepSeek" },
  { logo: InfosysLogo, name: "Infosys" },
  { logo: ClaudeLogo, name: "Claude" },
  { logo: OpenAILogo, name: "OpenAI" }
];

const MainSection = () => {
  return (
    <>
      <Header />
      <main className="prp-LandingPage-main">
        <section className="prp-LandingPage-hero" id="home">
          <div className="prp-LandingPage-heroContent">
            <p className="prp-LandingPage-eyebrow">BUILD YOUR FUTURE</p>
            <h1>Connect. Learn.<br />Get Placed.</h1>
            <p className="prp-LandingPage-heroDescription">The all-in-one platform that bridges the gap between talented individuals, top employers and training institutions.</p>
            <div className="prp-LandingPage-heroActions">
              <a href="/register" className="prp-LandingPage-primaryButton">Get Started</a>
              <a href="#features" className="prp-LandingPage-secondaryButton">Explore Jobs</a>
            </div>
          </div>
          <div className="prp-LandingPage-heroImage">
            <img src={heroIllustration} alt="People collaborating on recruitment and career planning" />
          </div>
        </section>
        <section className="prp-LandingPage-features" id="features">
          <div className="prp-LandingPage-sectionHeading">
            <p className="prp-LandingPage-eyebrow">WHY CHOOSE US</p>
            <h2>Everything You Need for a Successful Career</h2>
          </div>
          <div className="prp-LandingPage-featureGrid">
            {features.map((feature) => (
              <article className="prp-LandingPage-featureCard" key={feature.title}>
                <div className="prp-LandingPage-featureIcon">
                  <img src={feature.icon} alt={feature.title} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="prp-LandingPage-testimonials" id="success-stories">
          <div className="prp-LandingPage-sectionHeading">
            <p className="prp-LandingPage-eyebrow">SUCCESS STORIES</p>
            <h2>WHAT OUR USERS SAY</h2>
          </div>
          <div className="prp-LandingPage-testimonialGrid">
            {testimonials.map((testimonial) => (
              <article className="prp-LandingPage-testimonialCard" key={testimonial.name}>
                <img className="prp-LandingPage-quoteIcon" src={QuoteIcon} alt="" />
                <div className="prp-LandingPage-testimonialHeader">
                  <div className="prp-LandingPage-profileIcon">
                    <img src={ProfileIcon} alt="User profile" />
                  </div>
                  <div className="prp-LandingPage-testimonialInfo">
                    <div className="prp-LandingPage-stars" aria-label="5 out of 5 stars">
                      {[1, 2, 3, 4, 5].map((star) => <img src={StarIcon} alt="" key={star} />)}
                    </div>
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
                <p className="prp-LandingPage-testimonialMessage">{testimonial.message}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="prp-LandingPage-companies" id="recruiters">
          <div className="prp-LandingPage-sectionHeading">
            <p className="prp-LandingPage-eyebrow">TRUSTED BY LEADING COMPANIES</p>
            <h2>TOP COMPANIES HIRE HERE</h2>
          </div>
          <div className="prp-LandingPage-companyGrid">
            {companies.map((company) => (
              <div className="prp-LandingPage-companyLogo" key={company.name}>
                <img src={company.logo} alt={company.name} />
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MainSection;