// src/components/CategorySelector.tsx
import React, { useRef } from 'react';
import './categoryselector.scss';
import { FaTrash } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import type { IState } from '../../interfaces/IState';
import { clearCategories, toggleCategories } from '../../reducers/categoriesSlice';

const defaultCategories = [
  'Retos extremos',
  'Sociales',
  'Deportes',
  'Comida',
  'Baile',
  'Tendencias',
  'Cómicos',
  '24 horas',
  'En pareja',
  'Random',
];

export const CategorySelector: React.FC = () => {
  const dispatch = useDispatch();
  const selectedCategories = useSelector(
    (state: IState) => state.categories.selectedCategories
  );
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -clientWidth / 1.5 : clientWidth / 1.5,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="category-selector-wrapper">

      <button className="arrow-button left" onClick={() => scroll('left')}>‹</button>

      <div className="category-selector" ref={scrollRef}>
        {defaultCategories.map((category) => (
          <button
            key={category}
            className={`category-button ${selectedCategories.includes(category) ? 'active' : ''}`}
            onClick={() => dispatch(toggleCategories(category))}
            aria-pressed={selectedCategories.includes(category)}
          >
            #{category}
          </button>
        ))}
      </div>

      <button className="arrow-button right" onClick={() => scroll('right')}>›</button>

      <button
        className="clear-selection-button"
        onClick={() => dispatch(clearCategories())}
        disabled={selectedCategories.length === 0}
        style={{
          marginLeft: '0.8rem',
          padding: '0.4rem 0.8rem',
          borderRadius: '12px',
          border: '1px solid #cccccc3a',
          backgroundColor: selectedCategories.length === 0 ? '#eee' : '#474545ff',
          color: selectedCategories.length === 0 ? '#999' : 'white',
          cursor: selectedCategories.length === 0 ? 'not-allowed' : 'pointer',
          userSelect: 'none',
          fontWeight: '600',
          transition: 'background-color 0.3s ease',
        }}
      >
        <FaTrash />
      </button>
    </div>
  );
};
