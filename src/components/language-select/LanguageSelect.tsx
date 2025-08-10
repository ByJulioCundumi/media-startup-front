import React, { useState } from 'react';
import './languageselect.scss';

const LanguageSelect: React.FC = () => {
  const [selected, setSelected] = useState<string>('en');
  const [open, setOpen] = useState<boolean>(false);

  const handleSelect = (code: string) => {
    setSelected(code);
    setOpen(false);
  };

  const getLabel = (code: string): string => {
    switch (code) {
      case 'en':
        return 'English';
      case 'es':
        return 'Español';
      default:
        return '';
    }
  };

  return (
    <div className="language-select" onClick={() => setOpen(!open)}>
      <div className="language-select__selected">
        {getLabel(selected)}
        <span className={`language-select__arrow ${open ? 'open' : ''}`}>▼</span>
      </div>
      {open && (
        <ul className="language-select__dropdown">
          <li
            className={`language-select__option ${selected === 'en' ? 'active' : ''}`}
            onClick={() => handleSelect('en')}
          >
            English
          </li>
          <li
            className={`language-select__option ${selected === 'es' ? 'active' : ''}`}
            onClick={() => handleSelect('es')}
          >
            Español
          </li>
        </ul>
      )}
    </div>
  );
};

export default LanguageSelect;