import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    userInfo: {
      isSignIn: false,
    },
  },
  reducers: {
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: (state) => {
      state.userInfo = {
        isSignIn: false,
      };
    },
  },
});

export const { addUser, removeUser } = loginSlice.actions;
export default loginSlice.reducer;
