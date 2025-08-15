import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./promoterspagenav.scss";
import { useDispatch, useSelector } from "react-redux";
import type { IState } from "../../interfaces/IState";
import { setJobsNavbar, setPromotersNavbar } from "../../reducers/navbarSlice";

const PromotersPageNav: React.FC = () => {
  const dispatch = useDispatch()
  const {promotersNavbar} = useSelector((state:IState)=> state.navbar)

  return (
    <div className="promoters-page-nav">
      <Link
        onClick={()=> dispatch(setPromotersNavbar("jobs"))}
        to="/promoters"
        className={`promoters-page-nav__option ${promotersNavbar === "jobs" ? "active" : ""}`}
      >
        Jobs
      </Link>

      <Link
        onClick={()=> dispatch(setPromotersNavbar("payments"))}
        to="/promoters/payments"
        className={`promoters-page-nav__option ${promotersNavbar === "payments" ? "active" : ""}`}
      >
        Payments Sent
      </Link>
    </div>
  );
};

export default PromotersPageNav;
