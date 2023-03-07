import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

interface IUserData {
    userId: string,
    name: string,
    speciality: string,
    bDay: string,
    location: string,
    description: string,
    // photoLink: string,
}

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