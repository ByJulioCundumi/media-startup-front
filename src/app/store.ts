import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "../reducers/sidebarSlice";
import languageSlice from "../reducers/languageSlice";
import navbarSlice from "../reducers/navbarSlice";

export default configureStore({
    reducer: {
        sidebar: sidebarSlice,
        language: languageSlice,
        navbar: navbarSlice
    }
})