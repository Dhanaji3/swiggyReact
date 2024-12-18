import React from "react";
import Recommended from "./Recommended";
import RestaurantsTopPicks from "./RestaurantsTopPicks";
import CustomisablePopup from "./CustomisablePopup";
import { useSelector } from "react-redux";
const RestaurantRecommended = ({ recommended }) => {
  const isPopup = useSelector((state) => state.cart.isPopup);
  return (
    <div className="mt-4">
      <div className="border-b">
        <div className="text-center my-2 text-gray-500 text-base font-semibold">
          MENU
        </div>
        <button className="w-full py-3 my-4 font-semibold text-md rounded-xl text-gray-500 bg-gray-200">
          Search for dishes
        </button>
      </div>
      <div>
        {recommended?.length > 0 &&
          recommended?.map((item) => {
            return (
              <div className="">
                <div className="mt-8 font-bold text-lg ">
                  {item?.card?.card?.title === "Top Picks" &&
                    item?.card?.card?.title !== undefined && (
                      <div>
                        <div className="pb-4">{item?.card?.card?.title}</div>
                        <RestaurantsTopPicks
                          topPicks={item?.card?.card?.carousel}
                        />
                      </div>
                    )}
                </div>
                <div>
                  {item?.card?.card?.title !== "Top Picks" &&
                    item?.card?.card?.title !== undefined && (
                      <Recommended recommend={item?.card?.card} />
                    )}
                </div>
              </div>
            );
          })}
      </div>
      <div>{isPopup && <CustomisablePopup />}</div>
    </div>
  );
};

export default RestaurantRecommended;
