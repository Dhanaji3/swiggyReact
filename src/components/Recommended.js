import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import veg from "../veg.png";
import nonVeg from "../nonveg.png";
import bestseller from "../bestseller.png";
import { addToCart, isPopupOpen } from "../store/CartSlice";

const Recommended = ({ recommend }) => {
  const [accFlag, setAccFlag] = useState(true);
  const { title, itemCards, categories } = recommend;
  const itemCard = itemCards ? itemCards : categories?.[0]?.itemCards;
  const isPopup = useSelector((state) => state.cart.isPopup);
  const resturantInfo = useSelector((state) => state.cart.resturantInfo);
  const dispatch = useDispatch();
  const addCart = (item) => {
    let detail = {
      rest: resturantInfo,
      cart: item,
    };
    dispatch(addToCart(detail));
  };
  const addAddOns = (item) => {
    dispatch(isPopupOpen(true));
    let detail = {
      rest: resturantInfo,
      cart: item,
    };
    dispatch(addToCart(detail));
  };
  return (
    <div className="pt-4 border-t">
      <div className="font-bold text-lg flex justify-between items-center">
        {title + " " + "(" + itemCards?.length + ")"}
        <buton className="cursor-pointer" onClick={(e) => setAccFlag(!accFlag)}>
          {accFlag && (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path d="m12 6.586-8.707 8.707 1.414 1.414L12 9.414l7.293 7.293 1.414-1.414L12 6.586z" />
            </svg>
          )}
          {!accFlag && (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" />
            </svg>
          )}
        </buton>
      </div>
      <div className="divide-y divide-slate-300">
        {itemCard?.length > 0 &&
          accFlag &&
          itemCard?.map((rec) => {
            const {
              name,
              description,
              price,
              ratings,
              isVeg,
              isBestseller,
              addons,
            } = rec?.card?.info;
            return (
              <div className="py-5 flex">
                <div className="w-9/12">
                  <div className="flex items-center gap-1">
                    <span>
                      {isVeg === 1 ? (
                        <img className="w-5" src={veg} />
                      ) : (
                        <img className="w-5" src={nonVeg} />
                      )}
                    </span>
                    <span>
                      {isBestseller && <img className="h-4" src={bestseller} />}
                    </span>
                  </div>
                  <div className="text-lg font-bold text-gray-700">{name}</div>
                  <div className="font-bold">₹ {price / 100}</div>
                  {ratings?.aggregatedRating?.rating && (
                    <div className="flex items-center gap-1">
                      <span>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          fillColor="#116649"
                        >
                          <rect width="14" height="14" fill="white"></rect>
                          <path
                            d="M5.67163 3.99166C6.22068 2.34179 6.49521 1.51686 7 1.51686C7.50479 1.51686 7.77932 2.34179 8.32837 3.99166L8.65248 4.96556H9.60668C11.4122 4.96556 12.315 4.96556 12.4703 5.45302C12.6256 5.94049 11.8893 6.4628 10.4167 7.50744L9.67376 8.03444L9.97544 8.94095C10.5325 10.615 10.8111 11.452 10.4033 11.754C9.99553 12.056 9.27604 11.5457 7.83705 10.5249L7 9.93112L6.16295 10.5249C4.72396 11.5457 4.00447 12.056 3.5967 11.754C3.18893 11.452 3.46747 10.615 4.02456 8.94095L4.04557 8.87783C4.18081 8.47145 4.24843 8.26825 4.18684 8.08006C4.12525 7.89187 3.94958 7.76725 3.59824 7.51802C2.11566 6.46633 1.37437 5.94049 1.52971 5.45302C1.68504 4.96556 2.5878 4.96556 4.39332 4.96556H5.34752L5.67163 3.99166Z"
                            fill="#116649"
                          ></path>
                        </svg>
                      </span>
                      <span className="text-sm font-semibold">
                        {ratings?.aggregatedRating?.rating +
                          " (" +
                          ratings?.aggregatedRating?.ratingCountV2 +
                          ")"}
                      </span>
                    </div>
                  )}
                  <div className="font-semibold text-gray-500">
                    {description}
                  </div>
                </div>
                <div className="w-3/12">
                  <div className="flex justify-end relative">
                    <img
                      style={{ backgroundColor: "rgb(229, 241, 211)" }}
                      className="rounded-xl "
                      src={
                        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_156,h_144/" +
                        rec?.card?.info?.imageId
                      }
                      alt="Food Image"
                    />
                    <div className="absolute -bottom-3 bg-white hover:bg-gray-200 py-2 px-10 text-green-600 right-4 border rounded-lg shadow-md text-lg font-bold">
                      <button
                        onClick={
                          addons
                            ? (e) => addAddOns(rec?.card?.info)
                            : (e) => addCart(rec?.card?.info)
                        }
                      >
                        ADD
                      </button>
                    </div>
                  </div>
                  {addons && (
                    <div className="text-xs text-center font-semibold pl-10 ml-2 pt-4 text-gray-400">
                      Customisable
                    </div>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Recommended;
