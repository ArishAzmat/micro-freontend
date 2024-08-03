import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    count: 0,  
}

export const countSlice  = createSlice({
    name :'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count = action.payload
        },
        clear: (state) => {
            state.count = 0;
        }
    }
})
