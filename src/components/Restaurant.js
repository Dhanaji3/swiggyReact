import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANTDETAILS } from "../utils/constant";
import RestaurantHeading from "./RestaurantHeading";
import RestaurantDetails from "./RestaurantDetails";
import RestaurantDeals from "./RestaurantDeals";
import RestaurantRecommended from "./RestaurantRecommended";
import RecommendedFooter from "./RecommendedFooter";
import { useSelector } from "react-redux";

const Restaurant = () => {
  const restId = useParams();
  const [restaurantData, setRestaurantData] = useState([]);
  const latlong = useSelector((state) => state.data.latLong);

  const getRestaurantDetails = async () => {
    const data = await fetch(
      RESTAURANTDETAILS.replace("latitude", latlong.latitude)
        .replace("longitude", latlong.longitude)
        .replace("REST_ID", restId.id)
    );
    const json = await data.json();
    setRestaurantData(json.data.cards);
  };
  useEffect(() => {
    getRestaurantDetails();
  }, []);
  return (
    <div className="mx-auto w-4/6 p-4">
      {restaurantData?.length > 0 && (
        <div>
          <RestaurantHeading heading={restaurantData[0]?.card?.card} />
          <RestaurantDetails details={restaurantData[2]?.card?.card} />
          <RestaurantDeals
            deals={
              restaurantData[3]?.card?.card?.gridElements?.infoWithStyle?.offers
            }
          />
          <RestaurantRecommended
            recommended={
              restaurantData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
            }
          />
          <RecommendedFooter />
        </div>
      )}
    </div>
  );
};

export default Restaurant;
