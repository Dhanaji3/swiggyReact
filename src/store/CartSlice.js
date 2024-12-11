import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartPayload: [],
    isPopup: false,
    resturantInfo: {},
    resturantDetail: {},
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartPayload.push(action.payload.cart);
      state.resturantDetail = action.payload.rest;
    },
    removeFromCart: (state, action) => {
      state.cartPayload.pop(action.payload);
    },
    isPopupOpen: (state, action) => {
      state.isPopup = action.payload;
    },
    addResturantDetail: (state, action) => {
      state.resturantInfo = action.payload;
    },
  },
});
export const { addToCart, isPopupOpen, removeFromCart, addResturantDetail } =
  cartSlice.actions;
export default cartSlice.reducer;
