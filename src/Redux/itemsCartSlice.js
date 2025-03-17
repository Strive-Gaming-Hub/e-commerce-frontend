import { createSlice } from "@reduxjs/toolkit";

const initialState={
    open:false,
    items:[]
}

const itemsCartSlice=createSlice({
    name:"itemsCart",
    initialState,
    reducers:{
        toggleBar:(state)=>{
            state.open=!state.open
        },
        setCart: (state, action) => {
          state.items = action.payload;
        },
        addToCart: (state, action) => {
        //   if (!state.items) {
        //     state.items = [];
        // }
          if(state.items.length > 0){
            state.items.map((ele)=>ele.quantity=ele.quantity+1)
          }
          else{
            state.items.push(action.payload);
          }
        },
        removeFromCart: (state, action) => {
          state.items = state.items.filter((item) => item.name !== action.payload);
        },
        clearCart: (state) => {
          state.items = [];
        },
        updateQuantity: (state, action) => {
          const { productId, quantity } = action.payload;
          const item = state.items.find((item) => item.productId === productId);
          if (item) {
            item.quantity = quantity; 
          }
        },
    }
})

export const {toggleBar,addToCart,setCart,removeFromCart,clearCart,updateQuantity} = itemsCartSlice.actions
export default itemsCartSlice.reducer

