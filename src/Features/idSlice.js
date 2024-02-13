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
        }
    }
})

export const { setUserData}  = idSlice.actions

export default idSlice.reducer