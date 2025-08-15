import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    challengesNavbar: "challenges",
    promotersNavbar: "jobs",
    jobsNavbar: "jobs",
    membersNavbar: "videos"
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
        },
        setPromotersNavbar: (state, actions)=>{
            return {
                ...state,
                promotersNavbar: actions.payload
            }
        },
        setJobsNavbar: (state, actions)=>{
            return {
                ...state,
                jobsNavbar: actions.payload
            }
        },
        setMembersNavbar: (state, actions)=>{
            return {
                ...state,
                membersNavbar: actions.payload
            }
        },
    }
})

export const {setChallengesNavbar, setJobsNavbar, setMembersNavbar, setPromotersNavbar} = NavbarSlice.actions
export default NavbarSlice.reducer