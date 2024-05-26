import React from "react";
import { RiSmartphoneLine } from "@remixicon/react";

function CategoriesSection() {
  const categories = [
    { name: "Gadgets", icon: <RiSmartphoneLine /> },
    { name: "Beauty", icon: <RiSmartphoneLine /> },
    { name: "Groceries", icon: <RiSmartphoneLine /> },
    { name: "Home Deco", icon: <RiSmartphoneLine /> },
    { name: "Mens", icon: <RiSmartphoneLine /> },
    { name: "Womens", icon: <RiSmartphoneLine /> },
    { name: "Automotive", icon: <RiSmartphoneLine /> },
    { name: "Lighting", icon: <RiSmartphoneLine /> },
  ];

  return (
    <div className="grid grid-cols-2 gap-1  h-[80vh] sm:grid-cols-4">
      {categories.map((category, index) => {
        return (
          <div
            key={index}
            className="bg-red-300 flex justify-center items-center text-center  text-white  uppercase shadow-sm cursor-pointer"
          >
            <div className="flex flex-col justify-center items-center hover:scale-105">
              {category.icon}
              <p>{category.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export { CategoriesSection };
