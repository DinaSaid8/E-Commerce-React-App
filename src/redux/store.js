import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartSlice";
import { counterSlice } from "./counterSlice";
// import counterSlice from "./counterSlice";
console.log(counterSlice);


export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        counteritem: cartSlice.reducer
}
})