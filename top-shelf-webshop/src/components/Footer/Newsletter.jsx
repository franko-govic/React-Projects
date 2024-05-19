import { RiArrowRightLine } from "@remixicon/react";
import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full h-full px-10 py-10 flex flex-col gap-5 justify-center items-start">
      <p className="text-sm font-semibold">Lets get in touch</p>
      <p className="text-3xl">Subscribe for our newsletter</p>
      <form action="" className="flex relative w-full text-zinc-900">
        <input
          type="text"
          placeholder="Enter your email..."
          className="w-full px-3 py-3 rounded-full  italic"
        />
        <button
          type="submit"
          className="flex items-center justify-center px-3 py-3 ring-1 ring-inset rounded-full absolute right-0"
        >
          <RiArrowRightLine />
        </button>
      </form>
    </div>
  );
};

export { Newsletter };
