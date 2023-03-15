import { IUser, IUserData, IUserReg, IUserWithData } from "@/utils/Interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { checkAuth, getUser, getUserData, login, registration, setUserData } from "../redusers/userReduser";

interface UserState {
  user: IUserWithData;
  isLoading: boolean;
  error: string;
  isAuth: boolean;
}

const initialState: UserState = {
  user: {
    _id: "",
    nickname: "",
    email: "",
    password: "",
    isActivated: false,
    userDataId: {
      name: '',
      speciality: '',
      bDay: '',
      location: '',
      description: '',
      photoLink: '',
      _id: '',
    },
  },
  isAuth: false,
  isLoading: false,
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [checkAuth.fulfilled.type]: (state, action: any) => {
      state.isLoading = false;
      state.error = "";
      state.isAuth = true;
    },
    [checkAuth.pending.type]: (state) => {
      state.isLoading = true;
    },
    [checkAuth.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isAuth = false;
    },
    [registration.fulfilled.type]: (state, action: any) => {
      state.isLoading = false;
      state.error = "";
      state.isAuth = true;
      state.user = action.payload.user;
    },
    [registration.pending.type]: (state) => {
      state.isLoading = true;
    },
    [registration.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [login.fulfilled.type]: (state, action: any) => {
      state.isLoading = false;
      state.error = "";
      state.isAuth = true;
      state.user = action.payload.user;
    },
    [login.pending.type]: (state) => {
      state.isLoading = true;
    },
    [login.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getUser.fulfilled.type]: (state, action: any) => {
      state.isLoading = false;
      state.error = "";
      state.user = action.payload;
    },
    [getUser.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getUserData.fulfilled.type]: (state, action: any) => {
      state.isLoading = false;
      state.error = "";
      state.user.userDataId = action.payload;
    },
    [getUserData.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getUserData.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [setUserData.fulfilled.type]: (state, action: any) => {
      state.isLoading = false;
      state.error = "";
      state.user.userDataId = action.payload;
    },
    [setUserData.pending.type]: (state) => {
      state.isLoading = true;
    },
    [setUserData.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
