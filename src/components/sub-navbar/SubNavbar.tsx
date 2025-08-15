import React from 'react';
import './subnavbar.scss';
import { useSelector } from 'react-redux';
import ChallengesFilter from '../challenges-filter/ChallengesFilter';
import { CategorySelector } from '../category-selector/CategorySelector';
import type { IState } from '../../interfaces/IState';
import GenderFilter from '../gender-filter/GenderFilter';
import { FaIdCardAlt } from 'react-icons/fa';
import ChallengesPageNav from '../challenges-page-nav/ChallengesPageNav';
import PromotersPageNav from '../promoters-page-nav/PromotersPageNav';
import JobsPageNav from '../jobs-page-nav/JobsPageNav';
import MembersPageNav from '../members-page-nav/MembersPageNav';

const SubNavbar: React.FC = () => {
  const { sidebarOption } = useSelector((state: IState) => state.sidebar);

  return (
    <nav className="sub-navbar" role="navigation" aria-label="Challenges navigation">
        {
          sidebarOption === "challenges" && <ChallengesPageNav />
        }
        {
          sidebarOption === "promoters" && <PromotersPageNav />
        }
        {
          sidebarOption === "jobs" && <JobsPageNav />
        }
        {
          sidebarOption === "members" && <MembersPageNav />
        }


        <CategorySelector />
        <GenderFilter/>

        {
          sidebarOption === "members" && <div className="pay-subscription-btn">
          <FaIdCardAlt className="pay-subscription-btn__icon" />
          Membresias
        </div>
        }

        <ChallengesFilter />
    </nav>
  );
};

export default SubNavbar;
