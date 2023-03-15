import { IUser, IUserReg, IUserWithData } from "@/utils/Interfaces";
import { $CombinedState } from "@reduxjs/toolkit";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import { RootState } from "../types";


export const userBaseInfoApi = createApi({
    reducerPath: 'UserAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8000/api/',}),
    tagTypes: ['Users'],
    endpoints: (build) => ({
        getAllUsers: build.query<IUserWithData, string>({
            query: () => ({
                url: `/users`,
            }),
            providesTags: result => ['Users']
        }),
    })
})