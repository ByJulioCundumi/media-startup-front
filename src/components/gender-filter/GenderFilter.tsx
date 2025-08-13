import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./GenderFilter.scss";
import type { IState } from "../../interfaces/IState";
import { setGenderFilter } from "../../reducers/genderFilterSlice";

const GenderFilter: React.FC = () => {
  const dispatch = useDispatch();
  const selected = useSelector((state: IState) => state.genderFilter.selected);

  return (
    <div className="gender-filter">
      {["All", "Male", "Female"].map((value) => (
        <div
          key={value}
          className={`gender-filter__option ${selected === value ? "active" : ""}`}
          onClick={() => dispatch(setGenderFilter(value as "All" | "Male" | "Female"))}
        >
          {value}
        </div>
      ))}
    </div>
  );
};

export default GenderFilter;
