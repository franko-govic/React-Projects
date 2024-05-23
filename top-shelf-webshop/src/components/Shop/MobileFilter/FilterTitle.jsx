import { RiArrowLeftSLine } from "@remixicon/react";
import React, { useContext } from "react";
import { UIContext } from "../../../Context/UIContext";

function FilterTitle({ toggle, title }) {
  const { toggleUIState } = useContext(UIContext);

  return (
    <div className="w-full flex justify-between items-center capitalize">
      <div onClick={() => toggleUIState(toggle)} className="flex-1">
        <RiArrowLeftSLine className="cursor-pointer" />
      </div>

      <p className="text-xl font-semibold">{title}</p>
      <div className="font-semibold flex-1 flex justify-end">
        <p className="cursor-pointer pr-2">Reset</p>
      </div>
    </div>
  );
}

export { FilterTitle };
