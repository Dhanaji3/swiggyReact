import React, { useEffect, useRef, useState } from "react";
import { SEARCHLOCATION, ADDRESSLATLONG } from "../utils/constant";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isPopupOpen } from "../store/CartSlice";
import {
  OpenPopup,
  setLatLong,
  setLocationChange,
  setcurrentLocation,
  setDisplayAddress,
} from "../store/dataSlice";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const popFlag = useSelector((state) => state.data.popUp);
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

  const getAddressLatLong = async (address) => {
    let encodeAddress = address.map((a) => a.value).join("+");
    try {
      const response = await fetch(
        ADDRESSLATLONG.replace("ADDRESS_DATA", encodeAddress.replace(/ /g, "+"))
      );
      const data = await response.json();
      if (data && data.length > 0) {
        const latitude = data[0].lat;
        const longitude = data[0].lon;
        const displayName = data[0].display_name;
        dispatch(setLatLong({ latitude, longitude }));
        dispatch(OpenPopup());
        dispatch(setLocationChange());
        dispatch(setDisplayAddress(displayName));
        setError("");
      } else {
        setError("Unable to find location");
      }
    } catch (err) {
      setError("Error occurred while fetching data");
    }
  };
  const currentLocationChange = () => {
    dispatch(OpenPopup());
    dispatch(setcurrentLocation());
    dispatch(setLocationChange());
  };
  const closePopup = () => {
    dispatch(OpenPopup());
    document.body.classList.add("overflow-visible");
  };
  return (
    <>
      {popFlag && (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="fixed inset-0 bg-gray-500/75 transition-opacity"
            aria-hidden="true"
          ></div>
          <div className="fixed inset-0 z-10 w-screen h-screen overflow-y-auto">
            <div className="flex h-screen text-center">
              <div className="relative transform overflow-hidden bg-white text-left shadow-xl transition-all s">
                <div className="bg-gray-white px-3 pb-3 pt-3 sm:p-3 sm:pb-3">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left">
                    <div className="bg-white">
                      <button
                        onClick={closePopup}
                        className="font-extralight text-sm text-black p-5"
                      >
                        ╳
                      </button>
                      <div className="m-6">
                        <input
                          type="text"
                          className="border p-5 w-96"
                          placeholder="Search for area, street name.."
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                      {searchQuery === "" && (
                        <div className="m-6 border w-96 p-5">
                          <button onClick={currentLocationChange}>
                            <div className="flex gap-3">
                              <div className="text-xl">📍</div>
                              <div>
                                <div className="text-sm font-medium hover:text-orange-500">
                                  Get Current Location
                                </div>
                                <div className="text-gray-400 text-xs text-left">
                                  Using GPS
                                </div>
                              </div>
                            </div>
                          </button>
                        </div>
                      )}
                      <div>
                        {searchSuggestion &&
                          searchSuggestion.map((item, index) => {
                            return (
                              <>
                                <div className="my-3 border-b border-dashed w-72 p-5 border-gray-400 ml-4">
                                  <button
                                    onClick={(e) =>
                                      getAddressLatLong(item?.terms)
                                    }
                                  >
                                    <div className="flex gap-3">
                                      <div className="text-xl">📍</div>
                                      <div>
                                        <div className="text-sm font-medium text-left hover:text-orange-500">
                                          {
                                            item?.structured_formatting
                                              ?.main_text
                                          }
                                        </div>
                                        <div className="text-gray-400 text-xs text-left">
                                          {
                                            item?.structured_formatting
                                              ?.secondary_text
                                          }
                                        </div>
                                      </div>
                                    </div>
                                  </button>
                                </div>
                              </>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Search;
