"use client";
import { createSlice } from '@reduxjs/toolkit';
import Products from '@/app/utils/Mock';

// Define the initial state using that type
const initialState = Products;

export const ProductSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
  },
});

export const { } = ProductSlice.actions;
export default ProductSlice.reducer;