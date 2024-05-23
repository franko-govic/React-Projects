import React, { useContext } from "react";
import { UIContext } from "../../../Context/UIContext";
import { FilterTitle } from "./FilterTitle";

function FilterBrand() {
  const { UIState, toggleUIState } = useContext(UIContext);

  return (
    <div
      className={`${
        UIState.filterBrand ? "bottom-0" : "-bottom-full"
      } fixed  right-0 left-0 z-20 h-[90vh] bg-white ring-2 ring-red-200 rounded-t-xl flex flex-col justify-between items-center py-5 px-5`}
    >
      <FilterTitle title="brand" toggle="filterBrand" />
      <div className="w-full flex-1 flex flex-col gap-10 items-start pl-2 py-10 capitalize">
        <label
          htmlFor=""
          className="w-full px-1 flex flex-row-reverse justify-between items-center"
        >
          <input type="checkbox" name="" id="" /> Brand 1
        </label>
        <label
          htmlFor=""
          className="w-full px-1 flex flex-row-reverse justify-between items-center"
        >
          <input type="checkbox" name="" id="" /> Brand 1
        </label>
        <label
          htmlFor=""
          className="w-full px-1 flex flex-row-reverse justify-between items-center"
        >
          <input type="checkbox" name="" id="" /> Brand 1
        </label>
      </div>
      <button
        onClick={() => toggleUIState("mobileFilter")}
        className="uppercase w-1/2 bg-black text-white py-3 cursor-pointer"
      >
        apply
      </button>
    </div>
  );
}

export { FilterBrand };
