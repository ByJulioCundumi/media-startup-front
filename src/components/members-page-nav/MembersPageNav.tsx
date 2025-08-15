import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./memberspagenav.scss";

const MembersPageNav: React.FC = () => {
  const location = useLocation();

  const approvedActive = location.pathname.startsWith("/promoters/approved");
  const suggestionsActive = location.pathname.startsWith("/promoters/suggestions");

  return (
    <div className="members-page-nav">
      <Link
        to="/promoters/approved"
        className={`members-page-nav__option ${approvedActive ? "active" : ""}`}
      >
        Video Clips
      </Link>

      <Link
        to="/promoters/suggestions"
        className={`members-page-nav__option ${suggestionsActive ? "active" : ""}`}
      >
        Member Posts
      </Link>
    </div>
  );
};

export default MembersPageNav;
