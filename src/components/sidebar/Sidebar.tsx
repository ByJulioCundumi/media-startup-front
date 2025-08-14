import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { FaRegHandPeace } from 'react-icons/fa';
import { MdWorkHistory } from 'react-icons/md';
import { BsInfoSquare } from 'react-icons/bs';
import { RiLoginBoxLine, RiSearch2Line } from 'react-icons/ri';
import { HiOutlineViewGridAdd } from 'react-icons/hi';
import { PiHandSwipeLeftThin } from 'react-icons/pi';

import { setSidebar } from '../../reducers/sidebarSlice';
import type { IState } from '../../interfaces/IState';
import './Sidebar.scss';
import { FaCartShopping } from 'react-icons/fa6';
import { ImBullhorn } from 'react-icons/im';
import { setAuthPopupStatus } from '../../reducers/popupStatusSlice';

const Sidebar: React.FC = () => {
  const { sidebarOption } = useSelector((state: IState) => state.sidebar);
  const dispatch = useDispatch();

  const loginRequired = ()=>{
    dispatch(setAuthPopupStatus("opened"))
  }

  const handleLogout = async () => {
    // TODO: Implementar logout
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <ul className="sidebar__menu">

          {/* Login */}
          <div onClick={loginRequired} className={`sidebar__menu-item sidebar__profile-active ${sidebarOption === 'authentication' ? 'sidebar__menu-item-active' : ''}`}>
            <div className="sidebar__tooltip-container">
              <RiLoginBoxLine className='sidebar__login-user' />
              <span className="sidebar__tooltip">Iniciar Sesion <FaRegHandPeace /></span>
            </div>
          </div>

          {/* Home */}
          <Link
            to="/"
            onClick={() => dispatch(setSidebar("challenges"))}
            className={sidebarOption === "challenges" ? "sidebar__menu-item-active" : "sidebar__menu-item"}
          >
            <div className="sidebar__tooltip-container">
              <span className="sidebar__icon"><FaCartShopping /></span>
              <span className="sidebar__tooltip">Available Challenges</span>
            </div>
          </Link>

          {/* Market */}
          <Link
            to="/promoters"
            onClick={() => dispatch(setSidebar("promoters"))}
            className={sidebarOption === "promoters" ? "sidebar__menu-item-active" : "sidebar__menu-item"}
          >
            <div className="sidebar__tooltip-container">
              <span className="sidebar__icon"><ImBullhorn  /></span>
              <span className="sidebar__tooltip">Join Promoters</span>
            </div>
          </Link>

          {/* Market */}
          <Link
            to="/jobs"
            onClick={() => dispatch(setSidebar("jobs"))}
            className={sidebarOption === "jobs" ? "sidebar__menu-item-active" : "sidebar__menu-item"}
          >
            <div className="sidebar__tooltip-container">
              <span className="sidebar__icon"><MdWorkHistory className='jobs-pulse'/></span>
              <span className="sidebar__tooltip">Jobs | Content Creators</span>
            </div>
          </Link>

          {/* Explore */}
          <Link
            to="/content"
            onClick={() => dispatch(setSidebar("content"))}
            className={sidebarOption === "content" ? "sidebar__menu-item-active" : "sidebar__menu-item"}
          >
            <div className="sidebar__tooltip-container">
              <span className="sidebar__icon sidebar__explore-icon"><RiSearch2Line /></span>
              <span className="sidebar__tooltip">Explore Content</span>
            </div>
          </Link>

          {/* About */}
          <Link
            to="/about"
            onClick={() => dispatch(setSidebar("about"))}
            className={sidebarOption === "about" ? "sidebar__menu-item-active" : "sidebar__menu-item"}
          >
            <div className="sidebar__tooltip-container">
              <span className="sidebar__icon"><BsInfoSquare /></span>
              <span className="sidebar__tooltip">About Challenge Kingdom</span>
            </div>
          </Link>

          {/* Crear cuenta */}
          <div onClick={loginRequired} className={sidebarOption === "my-posts" ? "sidebar__menu-item-active" : "sidebar__menu-item"}>
            <div className="sidebar__tooltip-container">
              <span className="sidebar__icon"><HiOutlineViewGridAdd /></span>
              <span className="sidebar__tooltip">Create your account</span>
            </div>
          </div>

        </ul>
      </div>

      {/* Footer */}
      <div onClick={loginRequired} className="sidebar__bottom">
        <div className="sidebar__tooltip-container logout" role="button" tabIndex={0}>
          <span className="sidebar__icon"><PiHandSwipeLeftThin /></span>
          <span className="sidebar__tooltip">Login required :)</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
