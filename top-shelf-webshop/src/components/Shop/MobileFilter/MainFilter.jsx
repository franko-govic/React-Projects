import { RiArrowRightSLine } from "@remixicon/react";
import React, { useContext } from "react";
import { UIContext } from "../../../Context/UIContext";

function MainFilter({ filter, title }) {
  const { toggleUIState } = useContext(UIContext);

  return (
    <div className="w-full flex justify-between items-center">
      <p>{title}</p>
      <div
        onClick={() => toggleUIState(filter)}
        className="flex gap-1 cursor-pointer"
      >
        <div className="flex items-center text-sm">
          <p>View all</p>
          <RiArrowRightSLine />
        </div>
      </div>
    </div>
  );
}

export { MainFilter };
