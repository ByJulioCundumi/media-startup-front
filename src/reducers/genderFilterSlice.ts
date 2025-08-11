import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IGenderFilter } from "../interfaces/IGenderFilter";

const initialState: IGenderFilter = {
  selected: "All",
};

const genderFilterSlice = createSlice({
  name: "genderFilter",
  initialState,
  reducers: {
    setGenderFilter: (state, action: PayloadAction<"Male" | "Female" | "All">) => {
      state.selected = action.payload;
    },
  },
});

export const { setGenderFilter } = genderFilterSlice.actions;
export default genderFilterSlice.reducer;
