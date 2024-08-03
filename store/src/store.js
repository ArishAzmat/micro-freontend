import React from 'react'
import {configureStore} from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { countSlice } from './reducers/countReducer';
import { userSlice } from './reducers/userSlice';


const {increment,clear} = countSlice.actions
const {saveUser,removeUser} = userSlice.actions

export const store = configureStore({
    reducer:{
        counter: countSlice.reducer,
        userDetails:userSlice.reducer
    }
})

//to access count 
export function useCount() { 
  const count = useSelector((state) => state.counter.count);
  console.log("count from store",count)

  const dispatch = useDispatch();
  return {
    count,
    increment: (action) => dispatch(increment(action)),
    clear: () => dispatch(clear()),
  };
}

export function useUserDetails() {
  const user = useSelector((state)=> state.userDetails)
  const dispatch = useDispatch()
  return {
    user,
    saveUser: (action) => dispatch(saveUser(action)),
    removeUser:() => dispatch(saveUser()),
  }
}


export function StoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
