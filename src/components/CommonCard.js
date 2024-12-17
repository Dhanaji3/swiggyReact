import React from "react";
import { Link } from "react-router-dom";
import { BASEIMGURL } from "../utils/constant";

const CommonCard = ({ restaurant }) => {
  const {
    cloudinaryImageId,
    avgRating,
    cuisines,
    name,
    areaName,
    sla,
    id,
    loyaltyDiscoverPresentationInfo,
    promoted,
  } = restaurant.info;
  return (
    <Link to={"/rest/" + id}>
      <div className="cursor-pointer w-56 mb-8">
        <div className="w-52 h-44">
          <img
            className="max-w-none rounded-lg w-full h-full object-cover transition ease-in-out  hover:-translate-y-1 hover:scale-110  duration-100"
            src={BASEIMGURL + cloudinaryImageId}
            alt=""
          />
          <div className="absolute top-3 -left-1">
            {loyaltyDiscoverPresentationInfo?.freedelMessage}
          </div>
        </div>
        <div className="mt-3">
          <div className="text-lg font-bold flex gap-2">
            {promoted && (
              <img
                className="w-5 h-5 mt-1"
                src="data:image/png;base64,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"
                alt=""
              />
            )}
            {name}
          </div>
          <div className="text-base font-bold flex">
            <svg
              className="mt-1 mr-1"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              role="img"
              aria-hidden="true"
              strokecolor="rgba(2, 6, 12, 0.92)"
              fillcolor="rgba(2, 6, 12, 0.92)"
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
                  <stop stopColor="#21973B"></stop>
                  <stop offset="1" stopColor="#128540"></stop>
                </linearGradient>
              </defs>
            </svg>
            {avgRating} . {sla.slaString}
          </div>
          <div className="text-base line-clamp-1">{cuisines.join(", ")}</div>
          <div className="text-base">{areaName}</div>
        </div>
      </div>
    </Link>
  );
};

//Higher Order Function
export const AdCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border border-red-900">
      <CommonCard restaurant={info} />
    </div>
  );
};

export default CommonCard;
