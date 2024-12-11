import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import dataSlice from "./dataSlice";

const appStore = configureStore({
  reducer: {
    cart: CartSlice,
    data: dataSlice,
  },
});

export default appStore;
