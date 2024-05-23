import React, { useContext } from "react";
import { UIContext } from "../../../Context/UIContext";
import { Slider } from "../../Commons/Slider";
import { MainFilter } from "./MainFilter";
import { FilterTitle } from "./FilterTitle";
import Rating from "react-rating";

function MobileFilter() {
  const { UIState, toggleUIState } = useContext(UIContext);

  return (
    <div
      className={`${
        UIState.mobileFilter ? "bottom-0" : "-bottom-full"
      } fixed  right-0 left-0 z-20 h-[90vh] bg-white ring-2 ring-red-400 rounded-t-xl flex flex-col justify-between items-center py-5 px-5 transition-all duration-700`}
    >
      <FilterTitle title="filter" toggle="mobileFilter" />
      <div className="w-full flex-1 flex flex-col justify-between pl-2 py-10 capitalize">
        <MainFilter filter="filterCategory" title="category" />
        <MainFilter filter="filterBrand" title="brand" />
        <Slider />
        <div className="capitalize flex flex-col gap-3">
          <p>Stock</p>
          <div className="flex items-center justify-start gap-4 text-sm">
            <label htmlFor="">
              <input type="radio" /> in stock
            </label>
            <label htmlFor="">
              <input type="radio" /> out of stock
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p>customer rating</p>
          <Rating />
        </div>
      </div>
      <button
        onClick={() => toggleUIState("mobileFilter")}
        className="uppercase w-1/2 bg-black text-white py-3 cursor-pointer"
      >
        show 123 results
      </button>
    </div>
  );
}

export { MobileFilter };
