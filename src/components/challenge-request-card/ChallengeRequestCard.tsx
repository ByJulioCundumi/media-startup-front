import "./challengerequestcard.scss";
import { FaIdCardAlt, FaMale, FaRegClock } from "react-icons/fa";
import { GoAlert, GoCheck, GoHeartFill, GoX } from "react-icons/go";
import { CiMenuKebab } from "react-icons/ci";
import { useState } from "react";
import { FaRegComment } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import type { ChallengeRequestProps } from "../../util/requestsMock";

export default function ChallengeRequestCard({
  id,
  description,
  userName,
  userHandle,
  userAvatar,
  likes,
  comments,
  isAdmin,
}: ChallengeRequestProps) {
  const [expanded, setExpanded] = useState(false);
  const isLong = description.length > 80;
  const visibleText = expanded ? description : description.slice(0, 80);
  const toggleText = expanded ? "ver menos" : "ver más";

  const handleApprove = async () => {
    // Aquí lógica de aprobación
    console.log(`Aprobando reto ${id}`);
  };

  const handleReject = async () => {
    // Aquí lógica de rechazo
    console.log(`Rechazando reto ${id}`);
  };

  return (
    <div className="challenge-request">
      {/* Header */}
      <div className="challenge-request__header-actions">
        <p className="challenge-post__gender-icon">
                  <FaMale />
                </p>
        <span className="challenge-request__status-badge">
          <FaIdCardAlt /> Request
        </span>
        <CiMenuKebab className="challenge-request__options-icon" />
      </div>

      {/* User info */}
      <div className="challenge-request__user">
        <img
          src={userAvatar}
          alt={`${userName} avatar`}
          className="challenge-request__avatar"
        />
        <div>
          <p className="challenge-request__username">{userName}</p>
          <p className="challenge-request__handle">@{userHandle}</p>
        </div>
      </div>

      {/* Description */}
      <p className="challenge-request__description">
        {visibleText}
        {isLong && (
          <span
            className="challenge-request__see-more"
            onClick={() => setExpanded((prev) => !prev)}
          >
            …{toggleText}
          </span>
        )}
      </p>

      {/* Stats */}
      <div className="challenge-post__stats">
                <p
                  className="challenge-post__stat"
                >
                  {true ? (
                    <GoHeartFill className="challenge-post__stat-icon" />
                  ) : (
                    <GoHeart className="challenge-post__stat-icon" />
                  )}
                  {24}
                </p>
                <p className="challenge-post__stat">
                  <FaRegComment className="challenge-post__stat-icon" />
                  {25}
                </p>
              </div>

      {/* Actions */}
      {isAdmin ? (
        <div className="challenge-request__actions">
          <button
            className="challenge-request__btn challenge-request__btn--approve"
            onClick={handleApprove}
          >
            <GoCheck /> Aprobar
          </button>
          <button
            className="challenge-request__btn challenge-request__btn--reject"
            onClick={handleReject}
          >
            <GoX /> Rechazar
          </button>
        </div>
      ) : (
        <div className="challenge-request__viewer-note">
          <p><GoAlert /> Esta solicitud está pendiente de revisión.</p>
        </div>
      )}
    </div>
  );
}
