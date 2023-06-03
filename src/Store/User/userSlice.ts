import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';

export interface UserState {
  isLoggedIn: boolean;
  access_token: string | undefined;
  refresh_token: string | undefined;
}

const initialState: UserState = {
  isLoggedIn: true,
  access_token: undefined,
  refresh_token: undefined,
};

export interface SignUpReqDTO {
  email: string;
  name: string;
  password: string;
  surname: string;
}

export interface SignInDTO {
  email: string;
  password: string;
}

export interface SignUpResDTO {
  access_token: string;
  refresh_token: string;
}

export const signUp = createAsyncThunk('user/signUp', async (user: SignUpReqDTO) => {
  const response: AxiosResponse = await axios.post<SignUpResDTO>(
    `${import.meta.env.env.VITE_API_ROUTE}/auth/sign-up/`,
    user
  );
  return response.data;
});

export const signIn = createAsyncThunk('user/signIn', async (user: SignInDTO) => {
  const response: AxiosResponse = await axios.post<SignUpResDTO>(
    `${import.meta.env.VITE_API_ROUTE}/auth/sign-in/`,
    user
  );
  return response.data;
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [signUp.fulfilled.name]: (state: UserState, action: PayloadAction<SignUpResDTO>) => ({
      access_token: action.payload.access_token,
      refresh_token: action.payload.refresh_token,
      isLoggedIn: true,
    }),
    [signIn.fulfilled.name]: (state: UserState, action: PayloadAction<SignUpResDTO>) => ({
      access_token: action.payload.access_token,
      refresh_token: action.payload.refresh_token,
      isLoggedIn: true,
    }),
  },
});

export default userSlice.reducer;
