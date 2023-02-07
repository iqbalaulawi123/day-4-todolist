import { combineReducers, configureStore } from "@reduxjs/toolkit";
import  ReducerTask  from "./reducer-task";
import { persistStore,persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistCombineReducers from "redux-persist/es/persistCombineReducers";


const persistConfig = {
    key: 'root',
    storage,
    whiteList:[]
}

const persistedReducer = persistReducer(persistConfig, combineReducers({
    tasks: ReducerTask,
}))

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store)