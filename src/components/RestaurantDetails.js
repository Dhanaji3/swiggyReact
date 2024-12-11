import React from "react";
import { useDispatch } from "react-redux";
import { addResturantDetail } from "../store/CartSlice";

const RestaurantDetails = ({ details }) => {
  const {
    name,
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    areaName,
    sla,
    cloudinaryImageId,
    city,
    id,
    latLong,
    slugString,
    labels,
  } = details?.info;
  const { slaString } = details?.info?.sla;
  const dispatch = useDispatch();
  const lat = latLong?.split(",");
  let restaurant_details = {
    id: id,
    lat: lat[0],
    lng: lat[1],
    phone_no: "1762523746",
    address: labels?.[1]?.message,
    name: name,
    third_party_vendor_type: null,
    cloudinary_image_id: cloudinaryImageId,
    slug: slugString,
    city: city,
    area_name: areaName,
    sla: {
      slaString: sla.slaString,
    },
    closing_in_ms: 0,
    availability: null,
    special_instructions_opted: true,
    restaurant_special_instruction: "",
  };
  dispatch(addResturantDetail(restaurant_details));
  return (
    <div className="relative mt-4 ">
      <div className="absolute -inset-5 rounded-3xl bg-gradient-to-b top-0.5  from-slate-100 to-gray-200 "></div>
      <div className="rounded-3xl p-5 relative bg-white items-center font-bold pb-1 border ">
        <span className="flex gap-2 ">
          <span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              role="img"
              aria-hidden="true"
            >
              <circle
                cx="10"
                cy="10"
                r="9"
                fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
              ></circle>
              <path
                d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                fill="white"
              ></path>
              <defs>
                <linearGradient
                  id="StoreRating20_svg__paint0_linear_32982_71567"
                  x1="10"
                  y1="1"
                  x2="10"
                  y2="19"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#21973B"></stop>
                  <stop offset="1" stop-color="#128540"></stop>
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span>{avgRatingString + "(" + totalRatingsString + ")"} </span>
          <li>{costForTwoMessage}</li>
        </span>
        <div className="text-orange-600 font-bold text-sm pb-2">
          {cuisines.join(", ")}
        </div>
        <li className="font-bold text-sm">
          Outlet <span className="text-gray-500 text-sm">{" " + areaName}</span>
        </li>
        <li className="font-bold text-sm pt-2 pb-4">{slaString}</li>
      </div>
    </div>
  );
};

export default RestaurantDetails;
