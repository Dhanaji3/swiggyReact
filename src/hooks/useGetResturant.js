import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FOODLIST } from "../utils/constant";
import { addApiResponse } from "../store/dataSlice";
import MOCK_DATA from "../mocks/Resturant.json";

const useGetResturant = () => {
  const latlong = useSelector((state) => state.data.latLong);
  const locationChange = useSelector((state) => state.data.locationChange);
  const dispatch = useDispatch();
  const fetchResturant = async () => {
    try {
      const data = await fetch(
        FOODLIST.replace("latitude", latlong.latitude).replace(
          "longitude",
          latlong.longitude
        )
      );
      const json = await data.json();
      if (json?.statusCode === 0) {
        dispatch(addApiResponse(json?.data?.cards));
      } else {
        dispatch(addApiResponse(MOCK_DATA?.data?.cards));
      }
    } catch (error) {
      dispatch(addApiResponse(MOCK_DATA?.data?.cards));
    }
  };
  useEffect(() => {
    locationChange && fetchResturant();
  }, [locationChange]);
};

export default useGetResturant;
