// store.js
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./goodsSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export default store;
