import React from "react";

const RestaurantsTopPicks = ({ topPicks }) => {
  return (
    <div className="flex pb-12 overflow-auto ">
      {topPicks && (
        <div className="flex gap-4">
          {topPicks?.map((pick) => {
            const { dish, creativeId } = pick;
            const { info } = dish;
            const { finalPrice, price } = info;
            return (
              <div className="relative flex w-64 h-64">
                <img
                  className="rounded-xl "
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_256,h_264/" +
                    creativeId
                  }
                  alt="Food Image"
                />
                <div>
                  <span className="absolute left-3 bottom-5 text-md text-white">
                    ₹ {price / 100}
                  </span>
                  <div className="absolute bottom-3 bg-white hover:bg-gray-200 py-2 px-10 text-green-600 right-6 border rounded-lg shadow-md text-lg font-bold">
                    <button>ADD</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RestaurantsTopPicks;
