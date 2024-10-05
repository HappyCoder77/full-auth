import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, authState } from "@/types/interfaces";

const initialState = {
  isAuthenticated: false,
  isLoading: true,
  user: null,
} as authState;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    finishInitialLoad: (state) => {
      state.isLoading = false;
    },
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
  },
});

export const { setAuth, logout, finishInitialLoad, setUser } =
  authSlice.actions;

export default authSlice.reducer;
