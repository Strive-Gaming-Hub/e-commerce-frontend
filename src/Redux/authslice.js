"use client"

import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage"

 const initialState={
    user:null,
    token:Cookies.get("token"),
 }

 const authSlice=createSlice({
   name:"auth",
   initialState:initialState,
   reducers:{
      login:(state,action)=>{
         state.user=action.payload.user;
         state.token=action.payload.token;
         state.cart=action.payload.user.cart
         Cookies.set("token",action.payload.token,{ expires: 7, secure: true })
      },
      logout:(state,action)=>{
         state.user=null;
         state.token=null;
         Cookies.remove("token")
         storage.removeItem("persist:root")
      },
      updateCart:(state,action)=>{
         state.user=action.payload
      },
      deleteCart:(state,action)=>{
         if (state.user && state.user.cart) {
            state.user.cart = state.user.cart.filter(
              (item) => item.name !== action.payload
            );
          }
      }
   }
 })

 export const {login,logout,updateCart,deleteCart} = authSlice.actions

 const persistConfig = {
   key: "auth",
   storage,
 };

 export default persistReducer(persistConfig,authSlice.reducer)