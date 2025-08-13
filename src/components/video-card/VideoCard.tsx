import React from 'react';
import './VideoCard.scss';
import { CgMoreVertical } from 'react-icons/cg';
import { BsPatchCheckFill } from 'react-icons/bs';
import { FaIdCardAlt, FaRegComment, FaRegEye } from 'react-icons/fa';
import { LuHeart } from 'react-icons/lu';
import { MdOutlineCardMembership } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { IState } from '../../interfaces/IState';

interface VideoCardProps {
  thumbnailUrl: string;
  duration: string;
  profileImage: string;
  username: string;
  timeAgo: string;
  description: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  thumbnailUrl,
  profileImage,
  username,
  timeAgo,
  description,
}) => {
  const {sidebarOption} = useSelector((state:IState)=>state.sidebar)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const openVideo = ()=>{

  }

  return (
    <div className="video-card">
      <div className="video-card__thumbnail-container">
        <img src={thumbnailUrl} alt="Video thumbnail" className="video-card__thumbnail" onClick={openVideo}/>
        <div className='video-card__top-data'>
          <span className="video-card__top-data--category"><FaIdCardAlt/> Members Only</span>
        </div>
        <div className='video-card__data'>
          <span className="video-card__data--likes"><LuHeart className="challenge-post__cta--left--icon"/>154</span>
          <span className="video-card__data--comments"><FaRegComment className="challenge-post__cta--left--icon"/>57</span>
        </div>
        <div className='video-card__duration-container'>
          <span className="video-card__reward">
            <BsPatchCheckFill />
            Ganó $105.50
            <span className='video-card__reward--amount'>USD</span>
          </span>
        </div>
      </div>
      <div className="video-card__info">
        <img src={profileImage} alt={username} className="video-card__avatar" />
        <div className="video-card__text">
          <p className="video-card__description">
            {description.length > 70 ? description.slice(0, 67) + '...' : description}
          </p>
          <p className="video-card__meta">{username} • {timeAgo}</p>
        </div>
        <button className="video-card__menu-button" aria-label="Más opciones">
          <CgMoreVertical size={18} />
        </button>
      </div>
    </div>
  );
};

export default VideoCard;