import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { FaTh, FaRegHandPeace } from 'react-icons/fa';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { BsInfoSquare } from 'react-icons/bs';
import { RiApps2AddLine, RiLoginBoxLine, RiSearch2Line } from 'react-icons/ri';
import { HiOutlineViewGridAdd } from 'react-icons/hi';
import { LuMessageCircleQuestion } from 'react-icons/lu';
import { PiHandSwipeLeftThin } from 'react-icons/pi';

import { setSidebar } from '../../reducers/sidebarSlice';
import type { IState } from '../../interfaces/IState';
import './Sidebar.scss';
import { TiUserAddOutline } from 'react-icons/ti';

const Sidebar: React.FC = () => {
  const { sidebarOption } = useSelector((state: IState) => state.sidebar);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    // TODO: Implementar logout
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <ul className="sidebar__menu">

          {/* Login */}
          <div className={`sidebar__menu-item sidebar__profile-active ${sidebarOption === 'authentication' ? 'sidebar__menu-item-active' : ''}`}>
            <div className="sidebar__tooltip-container">
              <RiLoginBoxLine className='sidebar__login-user' />
              <span className="sidebar__tooltip">Iniciar Sesion <FaRegHandPeace /></span>
            </div>
          </div>

          {/* Home */}
          <Link
            to="/"
            onClick={() => dispatch(setSidebar("home"))}
            className={sidebarOption === "home" ? "sidebar__menu-item-active" : "sidebar__menu-item"}
          >
            <div className="sidebar__tooltip-container">
              <span className="sidebar__icon"><FaTh /></span>
              <span className="sidebar__tooltip">Global Challenges</span>
            </div>
          </Link>

          {/* Market */}
          <Link
            to="/market"
            onClick={() => dispatch(setSidebar("market"))}
            className={sidebarOption === "market" ? "sidebar__menu-item-active" : "sidebar__menu-item"}
          >
            <div className="sidebar__tooltip-container">
              <span className="sidebar__icon"><MdOutlineWorkOutline /></span>
              <span className="sidebar__tooltip">Join Promoters</span>
            </div>
          </Link>

          {/* Explore */}
          <Link
            to="/explore"
            onClick={() => dispatch(setSidebar("explore"))}
            className={sidebarOption === "explore" ? "sidebar__menu-item-active" : "sidebar__menu-item"}
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
              <span className="sidebar__tooltip">Sobre ChallengeMarket</span>
            </div>
          </Link>

          {/* Sesión requerida */}
          <div className={sidebarOption === "my-posts" ? "sidebar__menu-item-active" : "sidebar__menu-item"}>
            <div className="sidebar__tooltip-container">
              <span className="sidebar__icon"><LuMessageCircleQuestion /></span>
              <span className="sidebar__tooltip">Sesion Requerida</span>
            </div>
          </div>

          {/* Crear cuenta */}
          <div className={sidebarOption === "my-posts" ? "sidebar__menu-item-active" : "sidebar__menu-item"}>
            <div className="sidebar__tooltip-container">
              <span className="sidebar__icon"><HiOutlineViewGridAdd /></span>
              <span className="sidebar__tooltip">Crear Cuenta</span>
            </div>
          </div>

        </ul>
      </div>

      {/* Footer */}
      <div className="sidebar__bottom" onClick={handleLogout}>
        <div className="sidebar__tooltip-container logout" role="button" tabIndex={0}>
          <span className="sidebar__icon"><PiHandSwipeLeftThin /></span>
          <span className="sidebar__tooltip">Sesion requerida :)</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
