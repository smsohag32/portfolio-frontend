/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi } from "../features/login-api";
import { deleteCookie, getCookie, setCookie } from "@/utils/cookie";
const getPersistedToken = getCookie("token");
const cookieValue = getCookie("sohag") || "";
const getPersistedUser = cookieValue ? JSON.parse(cookieValue) : null;
const initialState: any = {
   token: getPersistedToken,
   user: getPersistedUser,
   isLoading: false,
   error: null,
};

export const loginUser = createAsyncThunk<any, any>(
   "auth/loginUser",
   async (credentials, { rejectWithValue }: any) => {
      try {
         const response = await loginApi(credentials);
         return response;
      } catch (error: any) {
         return rejectWithValue(error?.message || "Login failed");
      }
   }
);

const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      logoutUser: (state) => {
         state.token = null;
         state.user = null;
         deleteCookie("token");
         deleteCookie("sohag");
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(loginUser.pending, (state) => {
            state.isLoading = true;
            state.error = null;
         })
         .addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.token = action.payload?.token;
            state.user = action.payload?.user;

            if (state.token) {
               setCookie("token", state.token);
            }
            if (state.user) {
               setCookie("sohag", JSON.stringify(state.user));
            }
         })
         .addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload || "Login failed";
         });
   },
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
