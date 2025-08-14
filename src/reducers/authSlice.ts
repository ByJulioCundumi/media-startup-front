import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IAdminAuth, IUserAuth } from "../interfaces/IAuthData";

export interface AuthSliceState {
  user: IUserAuth;
  admin: IAdminAuth;
  loading: boolean;
}

const initialState: AuthSliceState = {
  user: {
    id: "",
    userId: "",
    fullName: "",
    email: "",
    role: "",
    verified: false,
    dateOfBirth: "",
    gender: "OTHER",
    lastEmailChangeAt: null,
    lastUserIdChangeAt: null,
    termsAccepted: true,
    country: "",
    currency: "",
    emailCodeExpiresAt: "",
    emailCodeHash: "",
    profileImageUrl: "",
    profilePresentation: "",
    subscriptionMessage: "",
    subscriptionPrice: 0,

    // Nuevos campos
    stripeCustomerId: null,
    stripeAccountId: null,
    stripeConnectedAt: "",
    stripeChargesEnabled: null,
    stripeDetailsSubmitted: null,
    stripePayoutsEnabled: null
  },
  admin: {
    id: "",
    fullName: "",
    email: "",
    role: "",
  },
  loading: true, // ← para saber si ya intentamos cargar la sesión
};

const AuthSlice = createSlice({
  name: "authData",
  initialState,
  reducers: {
    setUserAuth: (state, action: PayloadAction<IUserAuth>) => {
      state.user = { ...action.payload };
      state.loading = false;    // 👈
    },
    setAdminAuth: (state, action: PayloadAction<IAdminAuth>) => {
      state.admin = { ...action.payload };
      state.loading = false;  
    },
    clearAuth: (state) => {
      state.user = initialState.user;
      state.admin = initialState.admin;
      state.loading = false; 
    },
  },
});

export const { setUserAuth, setAdminAuth, clearAuth } = AuthSlice.actions;
export default AuthSlice.reducer;