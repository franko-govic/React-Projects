import React from "react";
import { MobileFilter } from "./MobileFilter/MobileFilter/";
import { FilterCategory } from "./MobileFilter/FilterCategory";
import { FilterBrand } from "./MobileFilter/FilterBrand";
import { MobileAccesButtons } from "./MobileFilter/MobileAccesButtons";
import { RegularFilter } from "./RegularFilter.jsx/RegularFilter";

function Shop() {
  return (
    <div className="mt-24 ">
      <MobileAccesButtons />
      <RegularFilter />
      <MobileFilter />
      <FilterCategory />
      <FilterBrand />
    </div>
  );
}

export { Shop };
