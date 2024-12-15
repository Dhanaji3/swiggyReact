import { useDispatch, useSelector } from "react-redux";
import { setLatLong, setDisplayAddress } from "../store/dataSlice";
import React, { useEffect } from "react";

const useCurrentLocation = () => {
  const dispatch = useDispatch();
  const currentLocation = useSelector((state) => state.data.currentLocation);
  const fetchLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          dispatch(setLatLong({ latitude, longitude }));
          dispatch(setDisplayAddress(""));
        },
        (err) => {
          //  setError("You have blocked Swiggy from tracking your location. To use this, change your location settings in browser.");
        }
      );
    } else {
      // setError("You have blocked Swiggy from tracking your location. To use this, change your location settings in browser.");
    }
  };
  useEffect(() => {
    console.log("11111", currentLocation);
    currentLocation && fetchLocation();
  }, [currentLocation]);
};

export default useCurrentLocation;
