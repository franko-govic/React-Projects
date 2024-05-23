import React from "react";

function Slider() {
  return (
    <div className="w-full flex flex-col gap-4 capitalize">
      <p>Price range</p>

      <div className="w-full flex flex-col gap-4">
        <div className="flex gap-5 text-sm">
          <label htmlFor="" className="flex-1 flex flex-col-reverse gap-2">
            <input type="text" className="border border-zinc-300" />
            From
          </label>
          <label htmlFor="" className="flex-1 flex flex-col-reverse gap-2">
            <input type="text" className="border border-zinc-300" />
            to
          </label>
        </div>
        <input
          type="range"
          min={50}
          max={5000}
          step={50}
          className="w-full accent-red-500"
        />
      </div>
    </div>
  );
}

export { Slider };
