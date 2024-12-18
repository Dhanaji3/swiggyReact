import { click } from "@testing-library/user-event/dist/click";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { nearMeResponse } from "../store/dataSlice";

const BestCuisinesNearMe = ({ brands }) => {
  // const { text, link } = brands;
  //Data Scapping
  // useEffect(() => {
  //   getData();
  // }, []);
  const dispatch = useDispatch();
  const getData = async (link) => {
    const data = await fetch(link);
    const html = await data?.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const scriptTag = doc.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent);
    const restaurantsData = jsonData?.itemListElement;
    console.log("json scrapping", restaurantsData);
    dispatch(nearMeResponse(restaurantsData));
  };
  return (
    <div className="grid grid-cols-4 gap-8">
      {brands &&
        brands?.map((brand, index) => {
          const { text, link } = brand;
          return (
            <Link to="/nearMe">
              {/* <Link to={link}> */}
              <div
                onClick={(e) => getData(link)}
                key={index}
                className=" tracking-tight border-2 p-4 text-center rounded-2xl text-sm font-bold text-gray-600 cursor-pointer"
              >
                {text}
              </div>
              {/* </Link> */}
            </Link>
          );
        })}
    </div>
  );
};

export default BestCuisinesNearMe;
