import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api, apiWithToken } from '../api';

export const register = createAsyncThunk(
  'auth/register',
  async (email, { rejectWithValue }) => {
    try {
      const res = await api.post('register', { email });
      localStorage.setItem('token', res.data.token);
      return res.data;
    } catch (e) {
      console.log(e.response);
      if (e.response.data.message)
        return rejectWithValue(e.response.data.message);
      return rejectWithValue('Email must be email');
    }
  }
);

export const registerSecret = createAsyncThunk(
  'auth/registerSecret',
  async (userCredentials, { rejectWithValue }) => {
    try {
      const res = await apiWithToken.post('register/secret', userCredentials);
      localStorage.setItem('token', res.data.token);
      return res.data;
    } catch (e) {
      return rejectWithValue(e.response.data.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await api.post('login', credentials);
      localStorage.setItem('token', res.data.token);
      return res.data;
    } catch (e) {
      if (e.response.data.message)
        return rejectWithValue(e.response.data.message);
      return rejectWithValue('Email must be email');
    }
  }
);

export const loginSecret = createAsyncThunk(
  'auth/loginSecret',
  async (userCredentials, { rejectWithValue }) => {
    try {
      const res = await apiWithToken.post('login/secret', userCredentials);
      localStorage.setItem('token', res.data.token);
      return res.data;
    } catch (e) {
      return rejectWithValue(e.response.data.message);
    }
  }
);

export const loginByToken = createAsyncThunk(
  'auth/loginByToken',
  async (_, { rejectWithValue }) => {
    try {
      const res = await apiWithToken.get('find');

      return res.data;
    } catch (e) {
      return rejectWithValue(e.response.data.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    isLoading: false,
    error: null,
    isAuth: false,
    currentUser: null,
  },
  reducers: {
    removeError(state) {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(registerSecret.pending, state => {
        state.isLoading = true;
      })
      .addCase(registerSecret.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
      })
      .addCase(registerSecret.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(login.pending, state => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(loginSecret.pending, state => {
        state.isLoading = true;
      })
      .addCase(loginSecret.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
      })
      .addCase(loginSecret.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(loginByToken.pending, state => {
        state.isLoading = true;
      })
      .addCase(loginByToken.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuth = true;
        state.currentUser = action.payload;
      })
      .addCase(loginByToken.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { removeError } = authSlice.actions;

export default authSlice.reducer;
