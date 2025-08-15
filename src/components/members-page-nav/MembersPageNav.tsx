import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./memberspagenav.scss";
import { useDispatch, useSelector } from "react-redux";
import type { IState } from "../../interfaces/IState";
import { setMembersNavbar } from "../../reducers/navbarSlice";

const MembersPageNav: React.FC = () => {
  const dispatch = useDispatch()
  const {membersNavbar} = useSelector((state:IState)=> state.navbar)

  return (
    <div className="members-page-nav">
      <Link
        onClick={()=> dispatch(setMembersNavbar("videos"))}
        to="/members"
        className={`members-page-nav__option ${membersNavbar === "videos" ? "active" : ""}`}
      >
        Video Clips
      </Link>

      <Link
        onClick={()=> dispatch(setMembersNavbar("posts"))}
        to="/members/posts"
        className={`members-page-nav__option ${membersNavbar === "posts" ? "active" : ""}`}
      >
        Member Posts
      </Link>
    </div>
  );
};

export default MembersPageNav;
