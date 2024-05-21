import React from "react";

function CategoriesSection() {
  const categories = [
    "Gadgets",
    "Beauty",
    "Groceries",
    "Home Deco",
    "Mens",
    "Womens",
    "Automotive",
    "Lighting",
  ];
  return (
    <div className="grid grid-cols-2 gap-5 px-10 h-[82vh] sm:grid-cols-4 lg:grid-cols-8">
      {categories.map((category, index) => {
        return (
          <div
            key={index}
            className="bg-red-300 flex justify-center items-center text-center  text-white  uppercase shadow-sm cursor-pointer"
          >
            {category}
          </div>
        );
      })}
    </div>
  );
}

export { CategoriesSection };
