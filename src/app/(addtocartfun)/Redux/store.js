"use client";
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ProductSlice from './features/productSlice';
import CartSlice from './features/cartSlice';

import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/lib/persistReducer';

const persistconfiq = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  product: ProductSlice,
  cart: CartSlice
});

const persistedReducer = persistReducer(persistconfiq, reducer);

export const Store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});