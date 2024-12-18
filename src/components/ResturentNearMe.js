import React from "react";
import { useSelector } from "react-redux";
import CommonCard from "./CommonCard";

const ResturentNearMe = () => {
  const nearMeData = useSelector((state) => state.data.nearMeResponse);
  console.log("nearMeData", nearMeData);
  //   const topResto =
  //     nearMeData?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  return (
    <div className="flex flex-wrap w-5/6 mt-8 gap-14 mx-auto ">
      {nearMeData &&
        nearMeData.map((item, index) => {
          return (
            <div className="w-56 h-44  my-8 cursor-pointer">
              <img
                className=" max-w-none rounded-lg w-full h-full object-cover transition ease-in-out  hover:-translate-y-1 hover:scale-110  duration-100"
                src={item?.image}
                alt="resto-img"
              />
              <div className="p-2 font-bold text-base">{item?.name}</div>
            </div>
          );
        })}
      {/* {topResto &&
    //     topResto.map((item, index) => {
    //       return <CommonCard key={index} restaurant={item} />;
    //     })} */}
    </div>
  );
};

export default ResturentNearMe;
