import React, { useContext } from "react";
import { UIContext } from "../../../Context/UIContext";
import { FilterTitle } from "./FilterTitle";

function FilterCategory() {
  const { UIState, toggleUIState } = useContext(UIContext);

  return (
    <div
      className={`${
        UIState.filterCategory ? "bottom-0" : "-bottom-full"
      } fixed  right-0 left-0 z-20 h-[90vh] bg-white ring-2 ring-red-200 rounded-t-xl flex flex-col gap-5 justify-between items-center py-5 px-5`}
    >
      <FilterTitle title="category" toggle="filterCategory" />
      <div className="w-full flex-1 flex flex-col gap-5 pl-2 capitalize overflow-y-auto overflow-x-hidden">
        <div className="w-full flex flex-col gap-4 border-b pb-5">
          <p>Category</p>
          <label
            htmlFor=""
            className="w-full px-1 flex flex-row-reverse justify-between text-sm"
          >
            <input type="checkbox" name="" id="" /> subcategory
          </label>
          <label
            htmlFor=""
            className="w-full px-1 flex flex-row-reverse justify-between text-sm"
          >
            <input type="checkbox" name="" id="" /> subcategory
          </label>
          <label
            htmlFor=""
            className="w-full px-1 flex flex-row-reverse justify-between text-sm"
          >
            <input type="checkbox" name="" id="" /> subcategory
          </label>
        </div>
        <div className="w-full flex flex-col gap-4 border-b pb-5">
          <p>Category</p>
          <label
            htmlFor=""
            className="w-full px-1 flex flex-row-reverse justify-between text-sm"
          >
            <input type="checkbox" name="" id="" /> subcategory
          </label>
          <label
            htmlFor=""
            className="w-full px-1 flex flex-row-reverse justify-between text-sm"
          >
            <input type="checkbox" name="" id="" /> subcategory
          </label>
          <label
            htmlFor=""
            className="w-full px-1 flex flex-row-reverse justify-between text-sm"
          >
            <input type="checkbox" name="" id="" /> subcategory
          </label>
        </div>
        <div className="w-full flex flex-col gap-4 border-b pb-5">
          <p>Category</p>
          <label
            htmlFor=""
            className="w-full px-1 flex flex-row-reverse justify-between text-sm"
          >
            <input type="checkbox" name="" id="" /> subcategory
          </label>
          <label
            htmlFor=""
            className="w-full px-1 flex flex-row-reverse justify-between text-sm"
          >
            <input type="checkbox" name="" id="" /> subcategory
          </label>
          <label
            htmlFor=""
            className="w-full px-1 flex flex-row-reverse justify-between text-sm"
          >
            <input type="checkbox" name="" id="" /> subcategory
          </label>
        </div>
        <div className="w-full flex flex-col gap-2 border-b pb-5">
          <p>Category</p>
          <label
            htmlFor=""
            className="w-full px-1 flex flex-row-reverse justify-between text-sm"
          >
            <input type="checkbox" name="" id="" /> subcategory
          </label>
          <label
            htmlFor=""
            className="w-full px-1 flex flex-row-reverse justify-between text-sm"
          >
            <input type="checkbox" name="" id="" /> subcategory
          </label>
          <label
            htmlFor=""
            className="w-full px-1 flex flex-row-reverse justify-between text-sm"
          >
            <input type="checkbox" name="" id="" /> subcategory
          </label>
        </div>
      </div>
      <button
        onClick={() => toggleUIState("filterCategory")}
        className="uppercase w-1/2 bg-black text-white py-3 cursor-pointer"
      >
        apply
      </button>
    </div>
  );
}

export { FilterCategory };
