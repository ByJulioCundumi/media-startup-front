import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./promoterspagenav.scss";

const PromotersPageNav: React.FC = () => {
  const location = useLocation();

  const approvedActive = location.pathname.startsWith("/promoters/approved");
  const suggestionsActive = location.pathname.startsWith("/promoters/suggestions");

  return (
    <div className="promoters-page-nav">
      <Link
        to="/promoters/approved"
        className={`promoters-page-nav__option ${approvedActive ? "active" : ""}`}
      >
        Jobs
      </Link>

      <Link
        to="/promoters/suggestions"
        className={`promoters-page-nav__option ${suggestionsActive ? "active" : ""}`}
      >
        Payments Sent
      </Link>
    </div>
  );
};

export default PromotersPageNav;
