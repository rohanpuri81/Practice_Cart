import { createSlice } from "@reduxjs/toolkit";
import productData from "../../productData";

const initialState = {
  cart: [],
  items: productData,
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
    },
    getCartTotal() {},
    removeItem() {},
    decreaseItemQuantity() {},
    increaseItemQuantity() {},
  },
});
export const {
  addToCart,
  getCartTotal,
  removeItem,
  decreaseItemQuantity,
  increaseItemQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
