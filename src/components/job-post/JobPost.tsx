import "./jobpost.scss";
import { FaMale, FaRegComment, FaHandPeace, FaStar } from "react-icons/fa";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { RiTimerLine } from "react-icons/ri";
import { CiMenuKebab } from "react-icons/ci";
import { useState } from "react";
import { TbClock } from "react-icons/tb";
import type { ChallengeProps } from "../util/challengesMock";

export default function JobPost({
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
    <div className="job-post">
      {/* Header */}
      <div className="job-post__header-actions">
        <p className="job-post__gender-icon">
          <FaMale />
        </p>
        <button className="job-post__header-btn">
          <TbClock />
        </button>
        <button className="job-post__header-btn"><span className="job-post__workers">(0) Creators</span></button>
        <CiMenuKebab className="job-post__options-icon" />
      </div>

      {/* User */}
      <div className="job-post__user-header">
        <div className="job-post__user-info">
          <p className="job-post__username">
            {"Sponsored"}
            <span>
              | <FaStar />
            </span>
          </p>
          <p className="job-post__handle">@vip</p>
        </div>
      </div>

      {/* Description */}
      <p className="job-post__description" onClick={openPost}>
        {visibleText}
        {isLong && (
          <span
            className="job-post__see-more"
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
      <div className="job-post__participants">
        <div className="job-post__stats">
          <p
            className="job-post__stat"
            onClick={handleToggleLike}
          >
            {liked ? (
              <GoHeartFill className="job-post__stat-icon" />
            ) : (
              <GoHeart className="job-post__stat-icon" />
            )}
            {likesCount}
          </p>
          <p className="job-post__stat">
            <FaRegComment className="job-post__stat-icon" />
            {commentsCount}
          </p>
        </div>

        <div className="job-post__my-price">
          <p className="job-post__pricing-label">Reward</p>
          <p className="job-post__pricing-amount">
            $ {price.toFixed(2)} <span>(USD)</span>
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="job-post__footer">
        <div className="job-post__pricing">
          <p className="job-post__participants--text">
            <RiTimerLine /> Seeking Content Creator
          </p>
        </div>
        <div className="job-post__footer-left">
          <p className="job-post__sponsor-badge">
            Submit My Video <FaHandPeace />
          </p>
        </div>
      </div>
    </div>
  );
}
