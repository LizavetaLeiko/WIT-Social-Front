import { IUserData } from "@/utils/Interfaces";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";


export const userDataApi = createApi({
    reducerPath: 'UserDataAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8000/api'}),
    tagTypes: ['UserData'],
    endpoints: (build) => ({
        getUserData: build.query<IUserData, string>({
            query: (userId) => ({
                url: `/userdata/${userId}`,
            }),
            providesTags: result => ['UserData']
        }),
        setUserData: build.mutation<IUserData, IUserData>({
            query: (body) => ({
                url: `/userdata`,
                method: 'PUT',
                body: body
            }),
            invalidatesTags: ['UserData']
        }),
    })
})