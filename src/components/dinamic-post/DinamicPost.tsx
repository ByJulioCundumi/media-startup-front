import { useState } from 'react';
import {
  FaRegThumbsUp,
  FaRegCommentDots,
  FaShare,
  FaEllipsisV,
  FaRegCircle,
  FaCheckCircle,
} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setPostSelectedStatus } from '../../reducers/popupStatusSlice';
import './dinamicpost.scss';
import type { IState } from '../../interfaces/IState';
import type { DinamicPostProps, PollOption } from '../../util/postsMock';

export default function DinamicPost({
  type,
  user,
  content,
  imageUrl,
  pollQuestion,
  pollOptions,
}: DinamicPostProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
const { sidebarOption } = useSelector((state: IState) => state.sidebar);
const { exploreExpandedProfile } = useSelector((state: IState) => state.popupStatus);
  const [menuOpen, setMenuOpen] = useState(false);
  const { postSelectedStatus } = useSelector((state: IState) => state.popupStatus);
  const [options, setOptions] = useState<PollOption[]>(pollOptions || []);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [voted, setVoted] = useState(false);

  const totalVotes = options.reduce((acc, opt) => acc + opt.votes, 0);

  const toggleMenu = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setMenuOpen((prev) => !prev);
  };

  const selectPost = () => {

  };

  const handleVote = (index: number) => {
    if (!pollOptions) return;

    if (voted && selectedIndex !== null && selectedIndex !== index) {
      return;
    }

    const newOptions = options.map((option, i) => {
      if (i === index && voted && selectedIndex === index) {
        return { ...option, votes: option.votes - 1 };
      }
      if (i === index && !voted) {
        return { ...option, votes: option.votes + 1 };
      }
      return option;
    });

    setOptions(newOptions);

    if (voted && selectedIndex === index) {
      setSelectedIndex(null);
      setVoted(false);
    } else {
      setSelectedIndex(index);
      setVoted(true);
    }
  };

  const renderHeader = () => (
    <div className="dinamic-post__header">
      <img src={user.avatarUrl} alt="avatar" />
      <div className="dinamic-post__user-info">
        <strong>{user.name}</strong>
        <span>
          @{user.username} • hace {user.timeAgo}
        </span>
      </div>
      <div
        className="dinamic-post__menu-wrapper"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="dinamic-post__menu-button"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <FaEllipsisV />
        </button>
        {menuOpen && (
          <ul className="dinamic-post__menu">
            <li>
              <button onClick={() => alert('Reportar')}>Reportar</button>
            </li>
            <li>
              <button onClick={() => alert('Compartir')}>Compartir</button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );

  const renderFooter = () => (
    <div className="dinamic-post__footer">
      <button>
        <FaRegThumbsUp /> 95
      </button>
      <button>
        <FaRegCommentDots /> 31
      </button>
      <button>
        <FaShare />
      </button>
    </div>
  );

  const postClassName = `dinamic-post${postSelectedStatus === 'opened' ? ' dinamic-post--opened' : ''}`;

  if (type === 'text') {
    return (
      <div className={postClassName} onClick={selectPost}>
        {postSelectedStatus === 'closed' && renderHeader()}
        <div className="dinamic-post__content">
          <span className="dinamic-post__tag">
            Post
          </span>
          {content}
        </div>
        {postSelectedStatus === 'closed' && renderFooter()}
      </div>
    );
  }

  if (type === 'text-image') {
    return (
      <div className={postClassName} onClick={selectPost}>
        {postSelectedStatus === 'closed' && renderHeader()}
        <div className="dinamic-post__content">
          <span className="dinamic-post__tag">
            Post
          </span>
          {content} 
        </div>
        {imageUrl && (
          <div className="dinamic-post__image">
            <img src={imageUrl} alt="Post" />
          </div>
        )}
        {postSelectedStatus === 'closed' && renderFooter()}
      </div>
    );
  }

  if (type === 'text-poll') {
    return (
      <div className={postClassName} onClick={selectPost}>
        {postSelectedStatus === 'closed' && renderHeader()}

        <div className="dinamic-post__question">
          <span className="dinamic-post__tag">
            Poll
          </span>
          {pollQuestion}
        </div>
        <div className="dinamic-post__votes">
          {totalVotes.toLocaleString()} votos
        </div>

        <div className="dinamic-post__options" role="radiogroup">
          {options.map((option, index) => {
            const isSelected = index === selectedIndex;
            const percentage =
              totalVotes > 0 ? Math.round((option.votes / totalVotes) * 100) : 0;

            return (
              <div
                key={index}
                className={`dinamic-post__option ${voted ? 'voted' : ''} ${
                  isSelected ? 'selected' : ''
                }`}
                onClick={() => handleVote(index)}
                role="radio"
                aria-checked={isSelected}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleVote(index);
                  }
                }}
              >
                <div className="dinamic-post__bar-container">
                  <div
                    className="dinamic-post__bar"
                    style={{ '--bar-width': `${percentage}%` } as React.CSSProperties}
                  />
                </div>
                <div className="dinamic-post__icon">
                  {isSelected ? (
                    <FaCheckCircle color="#3ea6ff" />
                  ) : (
                    <FaRegCircle color="#9e9e9e" />
                  )}
                </div>
                <div className="dinamic-post__label">
                  <span className="dinamic-post__text">{option.text}</span>
                  {voted && (
                    <span className="dinamic-post__percentage">{percentage}%</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {postSelectedStatus === 'closed' && renderFooter()}
      </div>
    );
  }

  return null;
}