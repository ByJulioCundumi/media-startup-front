import "./promoterpost.scss";
import { FaMale } from "react-icons/fa";
import { RiTimerLine } from "react-icons/ri";
import { CiMenuKebab } from "react-icons/ci";
import { useState } from "react";
import { TbClock } from "react-icons/tb";
import type { ChallengeProps } from "../../util/challengesMock";
import { FiEye } from "react-icons/fi";
import { ImBullhorn } from "react-icons/im";

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
  const [blurred, setBlurred] = useState(true);

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
            For Promoters
            <span>
              | <ImBullhorn className="promoter-post__for"/>
            </span>
          </p>
          <p className="promoter-post__handle">@Male</p>
        </div>
      </div>

      {/* Description */}
      <div className="promoter-post__description-wrapper">
        <p
          className={`promoter-post__description ${blurred ? "promoter-post__description--blur" : ""}`}
          onClick={openPost}
        >
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
      </div>

      {/* Stats */}
      <div className="promoter-post__participants">
        <div className="promoter-post__stats">
          <p className="promoter-post__pricing-label-final">Price: ${price.toFixed(2)}</p>
        </div>

        <div className="promoter-post__my-price">
          <p className="promoter-post__pricing-label">Bounty</p>
          <p className="promoter-post__pricing-amount">
            $ {(price*0.2).toFixed(2)} <span>(USD)</span>
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="promoter-post__footer">
        <div className="promoter-post__pricing">
          <p className="promoter-post__participants--text">
            <RiTimerLine /> Find Sponsor & Producer
          </p>
        </div>
        <div className="promoter-post__footer-left">
          <p className="promoter-post__sponsor-badge">
            $ Share And Win 
          </p>
        </div>
      </div>
    </div>
  );
}
