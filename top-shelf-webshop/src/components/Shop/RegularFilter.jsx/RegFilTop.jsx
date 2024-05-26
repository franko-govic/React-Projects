import React from "react";
import { RiArrowDownSLine } from "@remixicon/react";

function RegFilTop() {
  return (
    <div className="flex justify-between items-center w-full p-5 bg-red-200 ">
      <h2 className="text-xl font-semibold">Filters</h2>
      <button className="flex px-2 py-1 border">
        <p className="capitalize">sort by</p>
        <RiArrowDownSLine />
      </button>
    </div>
  );
}

export default RegFilTop;
