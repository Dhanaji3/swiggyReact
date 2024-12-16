import React, { useEffect, useState } from "react";
import { FOODLIST } from "../utils/constant";
import Food from "./Food";
import TopRestaurants from "./TopRestaurants";
import TopOnlineDeliveryResto from "./TopOnlineDeliveryResto";
import BestCuisinesNearMe from "./BestCuisinesNearMe";
import Footer from "./Footer";
import useGetResturant from "../hooks/useGetResturant";
import { useSelector } from "react-redux";
import Search from "./Search";
import Shimmer from "./Shimmer";

const Body = () => {
  useGetResturant();
  const popFlag = useSelector((state) => state.data.popUp);
  const foodList = useSelector((state) => state.data.apiResponse);
  const shimmerArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="mx-auto w-5/6 px-4">
      <div className="border-b-2">
        {foodList && <Food info={foodList[0]} />}
      </div>
      <div className="mt-8 border-b-2">
        <div>{foodList && <TopRestaurants info={foodList[1]} />}</div>
      </div>
      <div className="mt-8 border-b-2">
        <div>{foodList && <TopOnlineDeliveryResto info={foodList[1]} />}</div>
      </div>
      <div className="border-b-2">
        {foodList &&
          foodList?.map((restoType, index) => {
            const { title, brands } = restoType?.card?.card;
            return (
              <div className="mt-8" key={index}>
                {(title === "Best Cuisines Near Me" ||
                  title === "Explore Every Restaurants Near Me") && (
                  <div>
                    <div className="text-xl font-bold py-4">{title}</div>
                    <BestCuisinesNearMe brands={brands} />
                  </div>
                )}
              </div>
            );
          })}
      </div>
      <div>
        {!foodList && (
          <div className="grid grid-cols-3 mt-10">
            {shimmerArray.map((element, index) => {
              return <Shimmer key={index} />;
            })}
          </div>
        )}
      </div>
      <div>
        <Footer />
      </div>
      <div className="">{popFlag && <Search />}</div>
    </div>
  );
};

export default Body;
