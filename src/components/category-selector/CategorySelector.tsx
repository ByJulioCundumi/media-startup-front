import React, { useRef, useState } from 'react';
import './categoryselector.scss';

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
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

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
    <div className="category-selector-wrapper"><span className='category-info'>Popular Topics</span>
      <button className="arrow-button left" onClick={() => scroll('left')}>‹</button>

      <div className="category-selector" ref={scrollRef}>
        {defaultCategories.map((category) => (
        <button
            key={category}
            className={`category-button ${selectedCategories.includes(category) ? 'active' : ''}`}
            onClick={() => toggleCategory(category)}
            aria-pressed={selectedCategories.includes(category)}
        >
            #{category} {/* Quité espacio entre # y texto */}
        </button>
        ))}
      </div>

      <button className="arrow-button right" onClick={() => scroll('right')}>›</button>
    </div>
  );
};