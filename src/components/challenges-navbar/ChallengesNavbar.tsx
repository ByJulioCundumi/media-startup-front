import React from 'react';
import './challengesnavbar.scss';
import { useDispatch, useSelector } from 'react-redux';
import ChallengesFilter from '../challenges-filter/ChallengesFilter';
import { CategorySelector } from '../category-selector/CategorySelector';
import type { IState } from '../../interfaces/IState';
import GenderFilter from '../gender-filter/GenderFilter';
import { FiBell, FiCreditCard } from 'react-icons/fi';
import { FaRegCreditCard } from 'react-icons/fa6';
import { FaIdCardAlt } from 'react-icons/fa';

const ChallengesNavbar: React.FC = () => {
  const { sidebarOption } = useSelector((state: IState) => state.sidebar);

  return (
    <nav className="challenges-navbar" role="navigation" aria-label="Challenges navigation">
        <GenderFilter />
        <CategorySelector />

        {
          sidebarOption === "content" && <div className="pay-subscription-btn">
          <FaIdCardAlt className="pay-subscription-btn__icon" />
          Membresias
        </div>
        }

        <ChallengesFilter />
    </nav>
  );
};

export default ChallengesNavbar;
