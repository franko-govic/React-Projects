import React, { useContext } from "react";
import { UIContext } from "../../../Context/UIContext";
import { RiEqualizer2Line, RiExpandUpDownLine } from "@remixicon/react";

function MobileAccesButtons() {
  const { toggleUIState } = useContext(UIContext);
  return (
    <div className="w-full flex items-center gap-5 my-10 px-5  md:hidden">
      <div
        className="flex-1 py-3 flex gap-2 justify-center items-center text-white bg-red-400 cursor-pointer"
        onClick={() => toggleUIState("mobileFilter")}
      >
        <RiEqualizer2Line />
        <p>FILTER</p>
      </div>
      <div className="flex-1 py-3 flex gap-2 justify-center items-center text-white bg-red-400 cursor-pointer">
        <RiExpandUpDownLine />
        <p>SORT BY</p>
      </div>
    </div>
  );
}

export { MobileAccesButtons };
