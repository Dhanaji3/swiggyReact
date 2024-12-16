import React from "react";
import { useSelector } from "react-redux";
import { BASEIMGURL } from "../utils/constant";
import { Link } from "react-router-dom";
import veg from "../veg.png";
import nonVeg from "../nonveg.png";

const CartDetails = () => {
  const resturantDetail = useSelector((state) => state?.cart?.resturantDetail);
  const cart = useSelector((state) => state?.cart?.cartPayload);
  const { id, area_name, name, cloudinary_image_id } = resturantDetail;
  return (
    <div className="w-96 bg-white p-4">
      {resturantDetail && (
        <Link to={"/rest/" + id}>
          <div className="flex gap-4">
            {name && (
              <img
                className="w-14 h-14"
                src={BASEIMGURL + cloudinary_image_id}
                alt={name}
              />
            )}
            <span className="border-b-2 border-black">
              <div className="font-bold">{name}</div>
              <div className="text-xs">{area_name}</div>
            </span>
          </div>
        </Link>
      )}
      {cart &&
        cart.map((item) => {
          const { id, name, price, isVeg } = item;
          return (
            <div className="flex gap-4 text-xs mt-5">
              {isVeg ? (
                <img className="w-3 h-3" src={veg} alt={name} />
              ) : (
                <img className="w-3 h-3" src={nonVeg} alt={name} />
              )}
              <div>{name}</div>
              <div>{price / 100} </div>
            </div>
          );
        })}
    </div>
  );
};

export default CartDetails;
