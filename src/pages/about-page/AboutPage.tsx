import { Link, Outlet, useLocation } from "react-router-dom";
import {
  FaUsers,
  FaGavel,
  FaEnvelope,
} from "react-icons/fa";

import "./aboutpage.scss";
import { TiLightbulb } from "react-icons/ti";
import { LuBadgeInfo } from "react-icons/lu";
import { BiSolidObjectsHorizontalLeft } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setSidebar } from "../../reducers/sidebarSlice";

const AboutPage: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(setSidebar("about"))
  },[])

  return (
    <div className="about-page">
      <nav className="about-page__sidebar">
        <Link
          to="/about/mission"
          className={`about-page__tab ${location.pathname === "/about/mission" ? "active" : ""}`}
        >
          <span className="about-page__icon"><BiSolidObjectsHorizontalLeft /></span>
          Mission
        </Link>

        <Link
          to="/about/vision"
          className={`about-page__tab ${location.pathname === "/about/vision" ? "active" : ""}`}
        >
          <span className="about-page__icon"><TiLightbulb /></span>
          Vision
        </Link>

        <Link
          to="/about"
          className={`about-page__tab ${location.pathname === "/about" ? "active" : ""}`}
        >
          <span className="about-page__icon"><LuBadgeInfo /></span>
          How It Works
        </Link>

        <Link
          to="/about/team"
          className={`about-page__tab ${location.pathname === "/about/team" ? "active" : ""}`}
        >
          <span className="about-page__icon"><FaUsers /></span>
          Team
        </Link>

        <Link
          to="/about/terms"
          className={`about-page__tab ${location.pathname === "/about/terms" ? "active" : ""}`}
        >
          <span className="about-page__icon"><FaGavel /></span>
          Terms 
        </Link>

        <Link
          to="/about/contact"
          className={`about-page__tab ${location.pathname === "/about/contact" ? "active" : ""}`}
        >
          <span className="about-page__icon"><FaEnvelope /></span>
          Contact
        </Link>
      </nav>

      <div className="about-page__content">
        <Outlet />
      </div>
    </div>
  );
};

export default AboutPage;