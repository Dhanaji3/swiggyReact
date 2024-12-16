import React from "react";
import { BASEIMGURL } from "../utils/constant";
import { Link } from "react-router-dom";

const Food = ({ info }) => {
  const title = info?.card?.card?.header?.title;
  const imageId = info?.card?.card?.imageGridCards?.info;
  return (
    <div className="pt-6">
      <div className="text-2xl font-bold pb-2">{title}</div>
      <div className="flex overflow-auto ">
        {imageId?.map((img, index) => {
          return (
            <div className="p-2 w-full" key={index}>
              <Link
                to={img.action.link.replace("https://www.swiggy.com/", "/")}
              >
                <img
                  className="w-36 h-44 max-w-none cursor-pointer"
                  src={BASEIMGURL + img.imageId}
                  alt="pic"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Food;
