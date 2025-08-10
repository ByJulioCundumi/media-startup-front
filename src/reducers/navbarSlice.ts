import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    challengesNavbar: "global",
}

const NavbarSlice = createSlice({
    name: "navbar",
    initialState,
    reducers: {
        setChallengesNavbar: (state, actions)=>{
            return {
                ...state,
                challengesNavbar: actions.payload
            }
        }
    }
})

export const {setChallengesNavbar} = NavbarSlice.actions
export default NavbarSlice.reducer