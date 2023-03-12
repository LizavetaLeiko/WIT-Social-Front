import { IPost } from "@/utils/Interfaces";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";


export const PostsApi = createApi({
    reducerPath: 'PostsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8000/api'}),
    tagTypes: ['Posts'],
    endpoints: (build) => ({
        createPost: build.mutation<IPost, IPost>({
            query: (body) => ({
                url: `/createpost`,
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['Posts']
        }),
        getPost: build.query<IPost, string>({
            query: (postId) => ({
                url: `/post/${postId}`,
            }),
            providesTags: result => ['Posts']
        }),
        getAllUsersPosts: build.query<IPost, string>({
            query: (userId) => ({
                url: `/usersposts/${userId}`,
            }),
            providesTags: result => ['Posts']
        }),
        getAllPosts: build.query<IPost, string>({
            query: () => ({
                url: `/posts`,
            }),
            providesTags: result => ['Posts']
        }),
    })
})