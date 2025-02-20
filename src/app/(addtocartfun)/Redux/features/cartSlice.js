"use client";
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state using that type
const initialState = [];
export const CartSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // add to cart functionality
    addtocart(state, action) {
      let uuid = Math.floor(1000 + Math.random() * 9000);
      let newobj = { ...action.payload, uuid };
      state.push(newobj);
    },

    // delete from cart
    delItem(state, { payload }) {
      return state.filter((val) => val.uuid !== payload);
    },

    // addition of item
    addition(state, action) {
      let obj = state.find(
        (val) =>
          val.id == action.payload.id &&
          val.color == action.payload.color &&
          val.size == action.payload.size
      );

      if (obj) {
        ++obj.qty;
        let newState = state.filter((val) => val.id !== obj.id);
        state.splice(0, state.length, ...newState, obj);
        return;
      }
    },
    // addition of item
    addition(state, action) {
      let obj = state.find((val) => val.uuid === action.payload.uuid);

      if (obj) {
        obj.qty += 1; 
      }
    },

    // subtraction of item
    subraction(state, action) {
      let obj = state.find((val) => val.uuid === action.payload.uuid);

      if (obj && obj.qty > 1) {
        obj.qty -= 1;
      } else if (obj && obj.qty === 1) {
        return state.filter((val) => val.uuid !== obj.uuid); // Remove item if qty is 0
      }
    },
  },
});

export const { addtocart, delItem, addition, subraction } = CartSlice.actions;
export default CartSlice.reducer;
