import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./ChallengesPageNav.scss";
import { useDispatch, useSelector } from "react-redux";
import type { IState } from "../../interfaces/IState";
import { setChallengesNavbar } from "../../reducers/navbarSlice";

const ChallengesPageNav: React.FC = () => {
    const dispatch = useDispatch()
    const {challengesNavbar} = useSelector((state:IState)=> state.navbar)

  return (
    <div className="challenges-page-nav">
      <Link
        onClick={()=> dispatch(setChallengesNavbar("challenges"))}
        to="/"
        className={`challenges-page-nav__option ${challengesNavbar === "challenges" ? "active" : ""}`}
      >
        Challenges
      </Link>

      <Link
        to="/requests"
        onClick={()=> dispatch(setChallengesNavbar("requests"))}
        className={`challenges-page-nav__option ${challengesNavbar === "requests" ? "active" : ""}`}
      >
        Member Requests
      </Link>
    </div>
  );
};

export default ChallengesPageNav;
