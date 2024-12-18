import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    apiResponse: null,
    popUp: false,
    latLong: {
      latitude: "18.4464732",
      longitude: "73.826375",
    },
    locationChange: true,
    currentLocation: true,
    displayAddress: "",
    language: "en",
    nearMeResponse: null,
  },
  reducers: {
    addApiResponse: (state, action) => {
      state.apiResponse = action.payload;
    },
    OpenPopup: (state) => {
      state.popUp = !state.popUp;
    },
    setLatLong: (state, action) => {
      state.latLong = action.payload;
    },
    setDisplayAddress: (state, action) => {
      state.displayAddress = action.payload;
    },
    setLocationChange: (state) => {
      state.locationChange = !state.locationChange;
    },
    setcurrentLocation: (state) => {
      state.currentLocation = !state.currentLocation;
    },
    changeLanguage: (state, action) => {
      state.language = action.payload;
    },
    nearMeResponse: (state, action) => {
      state.nearMeResponse = action.payload;
    },
  },
});

export const {
  addApiResponse,
  OpenPopup,
  setLatLong,
  setLocationChange,
  setcurrentLocation,
  setDisplayAddress,
  changeLanguage,
  nearMeResponse,
} = dataSlice.actions;
export default dataSlice.reducer;
