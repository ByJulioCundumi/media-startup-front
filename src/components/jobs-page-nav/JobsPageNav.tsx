import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./jobspagenav.scss";

const JobsPageNav: React.FC = () => {
  const location = useLocation();

  const approvedActive = location.pathname.startsWith("/promoters/approved");
  const suggestionsActive = location.pathname.startsWith("/promoters/suggestions");

  return (
    <div className="jobs-page-nav">
      <Link
        to="/promoters/approved"
        className={`jobs-page-nav__option ${approvedActive ? "active" : ""}`}
      >
        Jobs
      </Link>

      <Link
        to="/promoters/suggestions"
        className={`jobs-page-nav__option ${suggestionsActive ? "active" : ""}`}
      >
        Payments Sent
      </Link>
    </div>
  );
};

export default JobsPageNav;
