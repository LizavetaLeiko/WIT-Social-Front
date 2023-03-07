import { IUser } from "@/utils/Interfaces";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";


export const userBaseInfoApi = createApi({
    reducerPath: 'UserAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8000/api'}),
    tagTypes: ['UserBaseInfo'],
    endpoints: (build) => ({
        getUserBaseInfo: build.query<IUser, string>({
            query: (id) => ({
                url: `/user/${id}`,
            }),
            providesTags: result => ['UserBaseInfo']
        }),
        setUserBaseInfo: build.mutation<IUser, IUser>({
            query: (body) => ({
                url: `/registration`,
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['UserBaseInfo']
        }),
    })
})