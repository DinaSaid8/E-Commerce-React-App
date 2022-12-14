import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";
import { cartSlice } from "./cartSlice";
import { counterSlice } from "./counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    counteritem: cartSlice.reducer,
    auth: authSlice.reducer,
  },
});
