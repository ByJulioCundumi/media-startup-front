import React from 'react';
import { Link } from 'react-router-dom';
import './challengesnavbar.scss';
import { useDispatch, useSelector } from 'react-redux';
import ChallengesFilter from '../challenges-filter/ChallengesFilter';
import { CategorySelector } from '../category-selector/CategorySelector';
import type { IState } from '../../interfaces/IState';
import { setChallengesNavbar } from '../../reducers/navbarSlice';
import GenderFilter from '../gender-filter/GenderFilter';

const ChallengesNavbar: React.FC = () => {
  const dispatch = useDispatch();
  const { challengesNavbar } = useSelector((state: IState) => state.navbar);

  return (
    <nav className="challenges-navbar" role="navigation" aria-label="Challenges navigation">
        <GenderFilter />
        <CategorySelector />
        <ChallengesFilter />
    </nav>
  );
};

export default ChallengesNavbar;
