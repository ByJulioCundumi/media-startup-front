import "./promoterpost.scss";
import { FaMale, FaRegComment, FaHandPeace, FaStar } from "react-icons/fa";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { RiTimerLine } from "react-icons/ri";
import { CiMenuKebab } from "react-icons/ci";
import { useState } from "react";
import { TbClock } from "react-icons/tb";
import type { ChallengeProps } from "../util/challengesMock";
import { FiEye } from "react-icons/fi";

export default function PromoterPost({
  description,
  user,
  commentsCount,
  price,
  likedByMe,
  likesCount,
}: ChallengeProps) {
  const [expanded, setExpanded] = useState(false);
  const [liked, setLiked] = useState(likedByMe ?? false);

  const handleToggleLike = async () => {};
  const openPost = () => {};

  const isLong = description.length > 75;
  const visibleText = expanded ? description : description.slice(0, 75);
  const toggleText = expanded ? "ver menos" : "ver más";

  return (
    <div className="promoter-post">
      {/* Header */}
      <div className="promoter-post__header-actions">
        <p className="promoter-post__gender-icon">
          <FaMale />
        </p>
        <button className="promoter-post__header-btn">
          <TbClock />
        </button>
        <button className="promoter-post__header-btn"><span className="promoter-post__views">(214)</span> <FiEye /></button>
        <CiMenuKebab className="promoter-post__options-icon" />
      </div>

      {/* User */}
      <div className="promoter-post__user-header">
        <div className="promoter-post__user-info">
          <p className="promoter-post__username">
            Promoters
            <span>
              | <FaStar />
            </span>
          </p>
          <p className="promoter-post__handle">@Male</p>
        </div>
      </div>

      {/* Description */}
      <p className="promoter-post__description" onClick={openPost}>
        {visibleText}
        {isLong && (
          <span
            className="promoter-post__see-more"
            onClick={(e) => {
              e.stopPropagation();
              setExpanded((prev) => !prev);
            }}
          >
            …{toggleText}
          </span>
        )}
      </p>

      {/* Stats */}
      <div className="promoter-post__participants">
        <div className="promoter-post__stats">
          <p
            className="promoter-post__stat"
            onClick={handleToggleLike}
          >
            {liked ? (
              <GoHeartFill className="promoter-post__stat-icon" />
            ) : (
              <GoHeart className="promoter-post__stat-icon" />
            )}
            {likesCount}
          </p>
          <p className="promoter-post__stat">
            <FaRegComment className="promoter-post__stat-icon" />
            {commentsCount}
          </p>
        </div>

        <div className="promoter-post__my-price">
          <p className="promoter-post__pricing-label">Reward</p>
          <p className="promoter-post__pricing-amount">
            $ {price.toFixed(2)} <span>(USD)</span>
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="promoter-post__footer">
        <div className="promoter-post__pricing">
          <p className="promoter-post__participants--text">
            <RiTimerLine /> Waiting For Sponsor
          </p>
        </div>
        <div className="promoter-post__footer-left">
          <p className="promoter-post__sponsor-badge">
            Share To Win <FaHandPeace />
          </p>
        </div>
      </div>
    </div>
  );
}
