import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

export interface User {
  authToken: string;
  userId: string;
  email: string;
}

export interface T {
  user: User;
}

const initialState: T = {
  user: {
    authToken: '',
    userId: '',
    email: '',
  },
};

export const authSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    setAuthToken: (state, action: PayloadAction<string>) => {
      state.user.authToken = action.payload;
    },

    setUserId: (state, action: PayloadAction<string>) => {
      state.user.userId = action.payload;
    },

    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { setAuthToken, setUserId, setUser } = authSlice.actions;

export const getCurrentUser = (state: RootState) => state.auth;

export default authSlice.reducer;
