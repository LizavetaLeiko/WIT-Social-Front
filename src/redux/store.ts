import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { userBaseInfoApi } from "./redusers/userBaseInfoApi";
import { userDataApi } from "./redusers/userDataApi";

export const rootReducer = combineReducers({
    [userBaseInfoApi.reducerPath]: userBaseInfoApi.reducer,
    [userDataApi.reducerPath]: userDataApi.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(userBaseInfoApi.middleware, userDataApi.middleware)
    })
}

