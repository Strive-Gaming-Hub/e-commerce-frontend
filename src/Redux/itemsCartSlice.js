import { createSlice } from "@reduxjs/toolkit";

const initialState={
    open:false
}

const itemsCartSlice=createSlice({
    name:"itemsCart",
    initialState,
    reducers:{
        toggleBar:(state)=>{
            state.open=!state.open
        }
    }
})

export const {toggleBar} = itemsCartSlice.actions
export default itemsCartSlice.reducer

