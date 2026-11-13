import  { useState } from "react";
import "./DashboardSidebar.css";
import downArrow from "../assets/assets/down-arrow.png";

const CandidateDashboardSidebar = () => {
  const [showApplications, setShowApplications] = useState(false);
  const menuItems = [
    "Dashboard",
    "Job Search",
    "Applications Center",
    "Interview Schedule",
    "Assessments Center",
    "My Offers",
    "Training Programs",
    "AI Career Assistant",
    "Resume Manager",
    "MY Profile",
    "Notification Center",
    "Help Center & FAQ",
    "Account Settings"
  ];

  return (
    <div className="prp-candidate-dashboard-sidebar">
      {menuItems.map((item, index) => (
        <div className="prp-candidate-dashboard-sidebar-item" key={index}>
          {item === "Applications Center" ? (
            <button className="prp-candidate-dashboard-sidebar-button" onClick={() => setShowApplications(!showApplications)}>
              <span>{item}</span>
              <img src={downArrow} alt="arrow" className={`prp-candidate-dashboard-sidebar-arrow ${showApplications ? "prp-candidate-dashboard-sidebar-arrow-open" : ""}`} />
            </button>
          ) : (
            <button className="prp-candidate-dashboard-sidebar-button">{item}</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default CandidateDashboardSidebar;
