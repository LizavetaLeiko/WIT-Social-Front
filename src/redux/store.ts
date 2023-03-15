import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { PostsApi } from "./redusers/postsApi";
import { userBaseInfoApi } from "./redusers/userBaseInfoApi";
import userSlice from "./slices/userSlice";

export const rootReducer = combineReducers({
    userSlice,
    [userBaseInfoApi.reducerPath]: userBaseInfoApi.reducer,
    [PostsApi.reducerPath]: PostsApi.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(userBaseInfoApi.middleware, PostsApi.middleware)
    })
}

