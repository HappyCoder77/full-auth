import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/types/interfaces";
// interface User {
//   email: string;
//   is_superuser: boolean;
//   is_regionalmanager: boolean;
//   is_localmanager: boolean;
//   is_sponsor: boolean;
//   is_dealer: boolean;
//   is_collector: boolean;
//   has_profile: boolean;
// }

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
  },
});

export const { setAuth, logout, finishInitialLoad, setUser } =
  authSlice.actions;
export default authSlice.reducer;
