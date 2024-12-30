import React, { useEffect, useState } from "react";
import { SEARCHLOCATION } from "../utils/constant";

const FoodRestaurantSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  //call function everytime if text will update in search bar
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(searchQuery);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(SEARCHLOCATION.replace("INPUT_DATA", searchQuery));
    const json = await data.json();
    setSearchSuggestion(json.data);
  };

  useEffect(() => {
    if (debouncedValue) {
      getSearchSuggestion();
    }
  }, [debouncedValue]); // Calls the function when debouncedValue changes

  return (
    <div>
      <div className="m-6">
        <input
          type="text"
          className="border p-5 w-96"
          placeholder="Search for area, street name.."
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );
};

export default FoodRestaurantSearch;
