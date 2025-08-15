import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./jobspagenav.scss";
import { useDispatch, useSelector } from "react-redux";
import type { IState } from "../../interfaces/IState";
import { setJobsNavbar } from "../../reducers/navbarSlice";

const JobsPageNav: React.FC = () => {
  const dispatch = useDispatch()
  const {jobsNavbar} = useSelector((state:IState)=> state.navbar)

  return (
    <div className="jobs-page-nav">
      <Link
        onClick={()=> dispatch(setJobsNavbar("jobs"))}
        to="/jobs"
        className={`jobs-page-nav__option ${jobsNavbar === "jobs" ? "active" : ""}`}
      >
        Jobs
      </Link>

      <Link
        onClick={()=> dispatch(setJobsNavbar("payments"))}
        to="/jobs/payments"
        className={`jobs-page-nav__option ${jobsNavbar === "payments" ? "active" : ""}`}
      >
        Payments Sent
      </Link>
    </div>
  );
};

export default JobsPageNav;
