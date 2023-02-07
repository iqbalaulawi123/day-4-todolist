import { configureStore } from "@reduxjs/toolkit";
import  ReducerTask  from "./reducer-task";
import { persistStore,persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig = {
    key: 'root',
    storage,
    whiteList:[]
}

export default configureStore({
    reducer:{
        //deklarasi reducer
        tasks: ReducerTask
    },
})