import {AppDispatch} from "../types";
import axios from "axios";
import {userSlice} from "../slices/userSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";
import { api } from "@/axios/axios";

export const checkAuth: any = createAsyncThunk(
  "/refresh",
  async function (action, { rejectWithValue }) {
    try {
      const responce = await api.get(
        "/refresh"
      );
      localStorage.setItem('token', responce.data.accessToken);
      return responce.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
export const registration: any = createAsyncThunk(
  "/registration",
  async function (payload: any) {
    try {
      const responce = await api.post(
        "/registration", {nickname: payload.nickname, email: payload.email, password: payload.password}
      );
      localStorage.setItem('token', responce.data.accessToken);
      return responce.data;
    } catch (error: any) {
      return error.message;
    }
  }
);
export const login: any = createAsyncThunk(
  "/login",
  async function (payload: any) {
    try {
      const responce = await api.post(
        "/login", {email: payload.email, password: payload.password}
      );
      localStorage.setItem('token', responce.data.accessToken);
      return responce.data;
    } catch (error: any) {
      return error.message;
    }
  }
);
export const getUser: any = createAsyncThunk(
  "/getUser",
  async function (userId: string) {
    try {
      const responce = await api.get(
        `/user/${userId}`
      );
      return responce.data;
    } catch (error: any) {
      return error.message;
    }
  }
);
export const getUserData: any = createAsyncThunk(
  "/getUserData",
  async function (userDataId: string) {
    try {
      const responce = await api.get(
        `/userdata/${userDataId}`
      );
      return responce.data;
    } catch (error: any) {
      return error.message;
    }
  }
);
export const setUserData: any = createAsyncThunk(
  "/setUserData",
  async function (payload: any) {
    try {
      const responce = await api.put(
        `/userdata`,  {name: payload.name,
          speciality: payload.speciality,
          bDay: payload.bDay,
          location: payload.location,
          description: payload.description,
          photoLink: payload.photoLink}
      );
      return responce.data;
    } catch (error: any) {
      return error.message;
    }
  }
);