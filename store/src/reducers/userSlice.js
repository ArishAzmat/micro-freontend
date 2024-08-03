import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:'userDetails',
    initialState: {
        name:'',
        isLoggedin:false
    },
    reducers: {
        saveUser: (state,action) => {
            console.log("asdad",action)
            state.name = action.payload.name,
            state.isLoggedin = true
        },
        removeUser: () => {
            state.name = ''
        }
    }
})