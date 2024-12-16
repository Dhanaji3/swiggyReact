import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import dataSlice from "./dataSlice";
import loginSlice from "./loginSlice";

const appStore = configureStore({
  reducer: {
    cart: CartSlice,
    data: dataSlice,
    login: loginSlice,
  },
});

export default appStore;
