import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './challengesfilter.scss';

const ChallengesFilter = () => {
  const [selected, setSelected] = useState<'all' | 'recent' | 'liked' | 'commented'>('all');
  const [open, setOpen] = useState(false);
  const controlRef = useRef<HTMLDivElement>(null);
  const [menuStyles, setMenuStyles] = useState<{top: number; left: number; width: number}>({top: 0, left: 0, width: 0});

  const getLabel = () => {
    switch (selected) {
      case 'all': return 'All';
      case 'recent': return 'Most Recent';
      case 'liked': return 'Most Liked';
      case 'commented': return 'Most Commented';
      default: return '';
    }
  };

  const handleSelect = (value: 'all' | 'recent' | 'liked' | 'commented') => {
    setSelected(value);
    setOpen(false);
  };

  useEffect(() => {
    if (open && controlRef.current) {
      const rect = controlRef.current.getBoundingClientRect();
      setMenuStyles({
        top: rect.bottom + window.scrollY + 6,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
  }, [open]);

  return (
    <div className="challenges-filter">
      <div
        className="challenges-filter__control"
        onClick={() => setOpen(prev => !prev)}
        ref={controlRef}
      >
        <span className="challenges-filter__label">{getLabel()}</span>
        <span className={`challenges-filter__icon ${open ? 'open' : ''}`}>▾</span>
      </div>

      {open && createPortal(
        <ul
          className="challenges-filter__menu"
          style={{
            position: 'absolute',
            top: menuStyles.top,
            left: menuStyles.left,
            width: menuStyles.width,
            zIndex: 9999,
          }}
          onClick={e => e.stopPropagation()}
        >
          {['all', 'recent', 'liked', 'commented'].map((value) => (
            <li
              key={value}
              className={`challenges-filter__item ${selected === value ? 'active' : ''}`}
              onClick={() => handleSelect(value as any)}
            >
              {getLabelForValue(value as any)}
            </li>
          ))}
        </ul>,
        document.body
      )}
    </div>
  );
};

function getLabelForValue(value: 'all' | 'recent' | 'liked' | 'commented') {
  switch (value) {
    case 'all': return 'All';
    case 'recent': return 'Most Recent';
    case 'liked': return 'Most Liked';
    case 'commented': return 'Most Commented';
  }
}

export default ChallengesFilter;
