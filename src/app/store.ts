import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "../reducers/sidebarSlice";
import languageSlice from "../reducers/languageSlice";
import navbarSlice from "../reducers/navbarSlice";
import categoriesSlice from "../reducers/categoriesSlice";
import genderFilterSlice from "../reducers/genderFilterSlice";
import authSlice from "../reducers/authSlice";
import popupStatusSlice from "../reducers/popupStatusSlice";

export default configureStore({
    reducer: {
        sidebar: sidebarSlice,
        language: languageSlice,
        navbar: navbarSlice,
        categories: categoriesSlice,
        genderFilter: genderFilterSlice,
        authData: authSlice,
        popupStatus: popupStatusSlice,
    }
})