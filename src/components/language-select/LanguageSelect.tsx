import React, { useEffect, useState } from 'react';
import './languageselect.scss';
import { setLanguage } from '../../reducers/languageSlice';
import { useSelector, useDispatch } from 'react-redux';  // <-- agregar dispatch
import type { IState } from '../../interfaces/IState';
import { supportedLanguages } from '../../util/supportedLanguages';
import { TbLanguage, TbWorldPin } from 'react-icons/tb';

const LanguageSelect: React.FC = () => {
  const { selectedLanguage } = useSelector((state: IState) => state.language);
  const dispatch = useDispatch();  // <-- usar dispatch
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const browserLang = (navigator.languages && navigator.languages.length
      ? navigator.languages[0]
      : navigator.language
    ).slice(0, 2);

    if (supportedLanguages.includes(browserLang)) {
      dispatch(setLanguage(browserLang));
    } else {
      dispatch(setLanguage('en')); // fallback a inglés
    }
  }, [dispatch]);

  const handleSelect = (code: string) => {
    dispatch(setLanguage(code));  // <-- dispatch para cambiar estado
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
        <TbWorldPin className='language-select__icon'/> {getLabel(selectedLanguage)}
        <span className={`language-select__arrow ${open ? 'open' : ''}`}>▼</span>
      </div>
      {open && (
        <ul className="language-select__dropdown">
          <li
            className={`language-select__option ${selectedLanguage === 'en' ? 'active' : ''}`}
            onClick={() => handleSelect('en')}
          >
           <TbLanguage/> English
          </li>
          <li
            className={`language-select__option ${selectedLanguage === 'es' ? 'active' : ''}`}
            onClick={() => handleSelect('es')}
          >
           <TbLanguage/> Español
          </li>
        </ul>
      )}
    </div>
  );
};

export default LanguageSelect;
