import React from "react";
import { useSelector } from "react-redux";
import Account from "./Account";

const Cart = () => {
  const cartData = useSelector((state) => state.cart.cartPayload);
  const resturantDetail = useSelector((state) => state.cart.resturantDetail);
  console.log("cartData", cartData);
  console.log("resturantDetail", resturantDetail);
  return (
    <div className="flex bg-gray-200 h-screen">
      <div className="w-2/3 bg-white my-8 ml-10 mr-8">
        <Account />
      </div>
      <div className="bg-white w-1/3 my-8 mr-10">ssss</div>
    </div>
  );
};

export default Cart;
