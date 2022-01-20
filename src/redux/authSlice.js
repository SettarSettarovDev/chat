import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
    currentUser: null,
    token: null,
    isError: null,
    isLoading: true,
  },
  reducers: {
    setIsAuth(state, action) {
      state.isAuth = action.payload;
    },
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
    setIsError(state, action) {
      state.isError = action.payload;
    },
  },
});

export const { setIsAuth, setCurrentUser, setToken, setIsError } =
  authSlice.actions;

export default authSlice.reducer;
