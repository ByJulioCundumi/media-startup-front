import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./GenderFilter.scss";
import type { IState } from "../../interfaces/IState";
import { setGenderFilter } from "../../reducers/genderFilterSlice";

// Íconos de react-icons
import { FaVenusMars } from "react-icons/fa"; // All
import { FaMale } from "react-icons/fa";      // Male
import { FaFemale } from "react-icons/fa";    // Female

const GenderFilter: React.FC = () => {
  const dispatch = useDispatch();
  const selected = useSelector((state: IState) => state.genderFilter.selected);

  const options: ("All" | "Male" | "Female")[] = ["All", "Male", "Female"];
  const icons = {
    All: <FaVenusMars size={20} />,
    Male: <FaMale size={20} />,
    Female: <FaFemale size={20} />
  };

  const handleClick = () => {
    const currentIndex = options.indexOf(selected);
    const nextIndex = (currentIndex + 1) % options.length;
    dispatch(setGenderFilter(options[nextIndex]));
  };

  return (
    <div
      className={`gender-filter__option active`}
      onClick={handleClick}
    >
      {icons[selected]}
    </div>
  );
};

export default GenderFilter;
