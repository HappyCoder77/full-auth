import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  email: string;
  is_superuser: boolean;
}

interface authState {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: User | null;
}

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
    clearAuth: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { setAuth, clearAuth, logout, finishInitialLoad, setUser } =
  authSlice.actions;
export default authSlice.reducer;
