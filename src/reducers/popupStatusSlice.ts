import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    challengePopupStatus:"closed",
    sponsorshipPopupStatus:"closed",
    affiliatePopupStatus:"closed",
    profileToAffiliatePopupStatus: "closed",
    videoCardPopupStatus: "closed",
    exploreExpandedProfile: "closed",
    postSelectedStatus: "closed",
    createDinamicPostStatus: "closed",
    createSponsorshipStatus: "closed",
    createProposalStatus: "closed",
    notificationDropdownStatus: "closed",
    authPopupStatus: "closed"
}

const PopupStatusSlice = createSlice({
    name: "popupStatus",
    initialState,
    reducers: {
        setChallengePopupStatus: (state, actions)=>{
            return {
                ...state,
                challengePopupStatus: actions.payload
            }
        },
        setSponsorshipPopupStatus: (state, actions)=>{
            return {
                ...state,
                sponsorshipPopupStatus: actions.payload
            }
        },
        setAffiliatePopupStatus: (state, actions)=>{
            return {
                ...state,
                affiliatePopupStatus: actions.payload
            }
        },
        setProfileToAffiliatePopupStatus: (state, actions)=>{
            return {
                ...state,
                profileToAffiliatePopupStatus: actions.payload
            }
        },
        setVideoCardPopupStatus: (state, actions)=>{
            return {
                ...state,
                videoCardPopupStatus: actions.payload
            }
        },
        setExploreExpandedProfile: (state, actions)=>{
            return {
                ...state,
                exploreExpandedProfile: actions.payload
            }
        },
        setPostSelectedStatus: (state, actions)=>{
            return {
                ...state,
                postSelectedStatus: actions.payload
            }
        },
        setCreateDinamicPostStatus: (state, actions)=>{
            return {
                ...state,
                createDinamicPostStatus: actions.payload
            }
        },
        setCreateSponsorshipStatus: (state, actions)=>{
            return {
                ...state,
                createSponsorshipStatus: actions.payload
            }
        },
        setCreateProposalStatus: (state, actions)=>{
            return {
                ...state,
                createProposalStatus: actions.payload
            }
        },
        setNotificationDropdownStatus: (state, actions)=>{
            return {
                ...state,
                notificationDropdownStatus: actions.payload
            }
        },
        setAuthPopupStatus: (state, actions)=>{
            return {
                ...state,
                authPopupStatus: actions.payload
            }
        }
    }
})

export const {setAuthPopupStatus,setNotificationDropdownStatus,setCreateProposalStatus,setCreateSponsorshipStatus,setCreateDinamicPostStatus,setPostSelectedStatus,setExploreExpandedProfile,setAffiliatePopupStatus, setChallengePopupStatus, setSponsorshipPopupStatus, setProfileToAffiliatePopupStatus, setVideoCardPopupStatus} = PopupStatusSlice.actions
export default PopupStatusSlice.reducer