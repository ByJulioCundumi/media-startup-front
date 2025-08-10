import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    selectedLanguage: "en",
}

const LanguageSlice = createSlice({
    name: "language",
    initialState,
    reducers: {
        setLanguage: (state, actions)=>{
            return {
                ...state,
                selectedLanguage: actions.payload
            }
        }
    }
})

export const {setLanguage} = LanguageSlice.actions
export default LanguageSlice.reducer