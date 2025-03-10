"use client"

import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage"

 const initialState={
    user:null,
    token:Cookies.get("token"),
    open:false
 }

 const authSlice=createSlice({
   name:"auth",
   initialState:initialState,
   reducers:{
      login:(state,action)=>{
         state.user=action.payload.user;
         state.token=action.payload.token;
         Cookies.set("token",action.payload.token,{ expires: 7, secure: true })
      },
      logout:(state,action)=>{
         state.user=null;
         state.token=null;
         Cookies.remove("token")
         storage.removeItem("persist:root")
      },
      itemDrawer:(state)=>{
         state.open(!state.open)
      }
   }
 })

 export const {login,logout} = authSlice.actions

 const persistConfig = {
   key: "auth",
   storage,
 };

 export default persistReducer(persistConfig,authSlice.reducer)