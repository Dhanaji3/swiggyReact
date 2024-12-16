import React, { useEffect, useState } from "react";
import { COLLECTION } from "../utils/constant";
import { useParams, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import CommonCard from "./CommonCard";

const Collection = () => {
  const [collection, setCollection] = useState([]);
  const { id } = useParams();
  const location = useLocation();
  const url = location.search.replace("?collection_id", "collection");
  console.log("queryParams", url);
  const latlong = useSelector((state) => state.data.latLong);
  useEffect(() => {
    getCollectionData();
  }, []);
  const getCollectionData = async () => {
    const data = await fetch(
      COLLECTION.replace("latitude", latlong.latitude)
        .replace("longitude", latlong.longitude)
        .replace("COLLECTION_ID", url)
    );
    const json = await data.json();
    setCollection(json?.data?.cards);
  };
  return (
    <div className="w-9/12 mx-auto">
      <h1 className="font-bold text-4xl my-5 mt-10">
        {collection[0]?.card?.card?.title}
      </h1>
      <p className="text-lg my-5">{collection[0]?.card?.card?.description}</p>
      <h2 className="font-bold text-2xl my-5">
        {collection[2]?.card?.card?.gridElements?.infoWithStyle?.text}
      </h2>
      <div className="grid grid-cols-4 gap-6">
        {collection.map((item) => {
          return (
            item?.card?.card?.info && (
              <CommonCard restaurant={item?.card?.card} />
            )
          );
        })}
      </div>
    </div>
  );
};

export default Collection;
