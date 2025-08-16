import "./challengepost.scss";
import { FaMale, FaRegComment } from "react-icons/fa";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { RiTimerLine } from "react-icons/ri";
import { CiMenuKebab } from "react-icons/ci";
import { useState } from "react";
import { TbClock } from "react-icons/tb";
import type { ChallengeProps } from "../../util/challengesMock";
import { FiEye } from "react-icons/fi";
import { FaCartShopping } from "react-icons/fa6";
import { HiMiniCreditCard } from "react-icons/hi2";

export default function ChallengePost({
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
    <div className="challenge-post">
      {/* Header */}
      <div className="challenge-post__header-actions">
        <p className="challenge-post__views">  <FiEye className="challenge-post__views--icon"/> 214</p>
        <p className="challenge-post__gender-icon">
          <FaMale />
        </p>
        <button className="challenge-post__header-btn">
          <TbClock />
        </button>
        <CiMenuKebab className="challenge-post__options-icon" />
      </div>

      {/* User */}
      <div className="challenge-post__user-header">
        <div className="challenge-post__user-info">
          <p className="challenge-post__username">
            Project |
            <span>
              <FaCartShopping className="challenge-post__for"/>
            </span>
          </p>
          <p className="challenge-post__handle">@ClipChallengers</p>
        </div>
      </div>

      {/* Description */}
      <p className="challenge-post__description" onClick={openPost}>
        {visibleText}
        {isLong && (
          <span
            className="challenge-post__see-more"
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
      <div className="challenge-post__participants">
        <div className="challenge-post__stats">
          <p
            className="challenge-post__stat"
            onClick={handleToggleLike}
          >
            {liked ? (
              <GoHeartFill className="challenge-post__stat-icon" />
            ) : (
              <GoHeart className="challenge-post__stat-icon" />
            )}
            {likesCount}
          </p>
          <p className="challenge-post__stat">
            <FaRegComment className="challenge-post__stat-icon" />
            {commentsCount}
          </p>
        </div>

        <div className="challenge-post__my-price">
          <p className="challenge-post__pricing-label">Price</p>
          <p className="challenge-post__pricing-amount">
            $ {price.toFixed(2)} <span>(USDC)</span>
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="challenge-post__footer">
        <div className="challenge-post__pricing">
          <p className="challenge-post__participants--text">
            <RiTimerLine /> Make it happen
          </p>
        </div>
        <div className="challenge-post__footer-left">
          <p className="challenge-post__sponsor-badge">
            <HiMiniCreditCard /> Request Production
          </p>
        </div>
      </div>
    </div>
  );
}
