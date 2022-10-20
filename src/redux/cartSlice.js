import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartitems: [],
  counteritem: 0,
  quantity: 0,
};

export const cartSlice = createSlice({
  name: "counteritem",
  initialState,
  reducers: {
    // add
    AddToCart: (state, action) => {
      const itemIndex = state.cartitems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartitems[itemIndex].quantity += 1;
      } else {
        const Product = { ...action.payload, quantity: 1 };
        state.cartitems.push(Product);
        state.counteritem = state.cartitems.length;
      }
    },
    // remove item  from cart
    deleteItem: (state, action) => {
      state.cartitems.map((e, i) => {
        if (action.payload.id === e.id) {
          state.cartitems.splice(i, 1);
          state.counteritem = state.cartitems.length;
        }
      });
    },
// remove cart
    removeall: (state, action) => {
      state.cartitems=[]
    },
    //increment cart
    incrementCart: (state, action) => {
      const itemIndex = state.cartitems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartitems[itemIndex].quantity >= 1) {
        state.cartitems[itemIndex].quantity += 1;
        state.counteritem = state.cartitems.length;
      }
    },

    //decrement
    decrementCart: (state, action) => {
      const itemIndex = state.cartitems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartitems[itemIndex].quantity >= 1) {
        state.cartitems[itemIndex].quantity -= 1;
        state.counteritem = state.cartitems.length;
      }
    },
  },
});

//action
export const { incrementCart, decrementCart, AddToCart, deleteItem,removeall } =
  cartSlice.actions;
export default cartSlice.reducer;
