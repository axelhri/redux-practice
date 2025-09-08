import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';

interface User {
  email: string;
  roles: string[];
}

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  user: User | null;
}

type JwtPayload = {
  username?: string;
  roles?: string[];
  iat?: string;
  exp?: number;
};

const decodeJwtPayload = (token: string | null): User | null => {
  if (!token) return null;
  try {
    const decoded = jwtDecode<JwtPayload>(token);
    if (!decoded.username) return null;
    return {
      email: decoded.username,
      roles: decoded.roles ?? [],
    };
  } catch (e) {
    console.error(e);
    return null;
  }
};

const tokenFromStorage = localStorage.getItem('token');

const initialState: AuthState = {
  token: tokenFromStorage,
  isAuthenticated: !!tokenFromStorage,
  user: decodeJwtPayload(tokenFromStorage),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ token: string; user?: User }>,
    ) => {
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.user =
        action.payload.user ?? decodeJwtPayload(action.payload.token);
      localStorage.setItem('token', action.payload.token);
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem('token');
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
