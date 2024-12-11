import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FOODLIST } from "../utils/constant";
import { addApiResponse } from "../store/dataSlice";

const useGetResturant = () => {
  const latlong = useSelector((state) => state.data.latLong);
  const locationChange = useSelector((state) => state.data.locationChange);
  const dispatch = useDispatch();
  const fetchResturant = async () => {
    const data = await fetch(
      FOODLIST.replace("latitude", latlong.latitude).replace(
        "longitude",
        latlong.longitude
      )
    );
    const json = await data.json();
    console.log("data", data);
    dispatch(addApiResponse(json?.data?.cards));
  };
  useEffect(() => {
    console.log("popFlag", locationChange);
    locationChange && fetchResturant();
  }, [locationChange]);
};

export default useGetResturant;
