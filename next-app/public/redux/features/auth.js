import {createSlice,PayloadAction} from '@reduxjs/toolkit'


const admin={
    value:{
        email:"",
        password:""
    }
}

export const store=createSlice({
   name:'auth',
   admin,
   reducers:{
    forgot:(state,action)=>{
        return {
            value:{
                email:action.payload,
            }
        }
    },
   }
})