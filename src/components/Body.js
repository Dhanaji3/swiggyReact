import React, { useEffect, useState } from "react";
import { FOODLIST } from "../utils/constant";
import Food from "./Food";
import TopRestaurants from "./TopRestaurants";
import TopOnlineDeliveryResto from "./TopOnlineDeliveryResto";
import BestCuisinesNearMe from "./BestCuisinesNearMe";
import Footer from "./Footer";

const Body = () => {
  const [foodList, setFoodList] = useState([]);
  useEffect(() => {
    getFoodList();
  }, []);
  const getFoodList = async () => {
    const data = await fetch(FOODLIST);
    const json = await data.json();
    setFoodList(json?.data?.cards);
  };
  return (
    <div className="mx-auto w-5/6 px-4">
      <div className="text-xl font-bold mt-4">What's on your mind?</div>
      <div className="border-b-2">
        <Food info={foodList[0]} />
      </div>
      <div className="mt-8 border-b-2">
        <div className="text-xl font-bold">Top restaurants</div>
        <div>
          <TopRestaurants info={foodList[1]} />
        </div>
      </div>
      <div className="mt-8 border-b-2">
        <div className="text-xl font-bold">Top restaurant chains in City</div>
        <div>
          <TopOnlineDeliveryResto info={foodList[1]} />
        </div>
      </div>
      <div className="border-b-2">
        {foodList &&
          foodList?.map((restoType) => {
            const { title, brands } = restoType?.card?.card;
            return (
              <div className="mt-8">
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
        <Footer />
      </div>
    </div>
  );
};

export default Body;
