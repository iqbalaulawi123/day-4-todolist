import { createSlice } from "@reduxjs/toolkit";

export const ReducerTask = createSlice({
    name:'tasks',
    initialState:{
        data:[],
    },
    reducers:{
        /**
         * action : data yang dilempar
         * state ya state awal
         */
        submitTaskList: (state ,action) => {
            let sample = [action.payload,...state.data];
            state.data = sample;
        },
        checkTaskList: (state ,action) => {
            state.data = state.data.map(task =>
                task.id === action.payload
                ? { ...task, completed: !task.completed }
                : task
            );
        },
        deleteTaskList: (state ,action) => {
            let filtered = state.data.filter(task => task.id !== action.payload);
            state.data = filtered;
        }
    }
})

export const {submitTaskList,deleteTaskList,checkTaskList} = ReducerTask.actions;

export default ReducerTask.reducer;