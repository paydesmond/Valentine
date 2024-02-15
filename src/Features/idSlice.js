import {createSlice } from '@reduxjs/toolkit'

const initialState = {
    userdata:null
}


export  const idSlice = createSlice({
    name:'userdata',
    initialState,
    reducers:{
        setUserData:(state,action)=>{
            state.userdata = action.payload
        },
        clearUserData:(state)=>{
           state.userdata = null
        }
    }
})

export const { setUserData,clearUserData}  = idSlice.actions

export default idSlice.reducer