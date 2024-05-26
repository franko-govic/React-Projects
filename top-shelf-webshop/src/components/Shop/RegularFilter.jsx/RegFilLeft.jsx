import React from "react";
import { Slider } from "../../Commons/Slider";

function RegFilLeft() {
  return (
    <div className="h-fit flex-1 flex flex-col gap-10 p-5 mt-5 bg-yellow-200">
      <p>Categories</p>
      <p>Brands</p>
      <Slider />
      <p>Availiabilty status</p>
      <p>Costumer rating</p>
    </div>
  );
}

export default RegFilLeft;
