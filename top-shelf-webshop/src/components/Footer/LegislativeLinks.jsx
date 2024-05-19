import React from "react";

const LegislativeLinks = () => {
  const legalLinks = [
    "Top shelf d.o.o.",
    "Support",
    "Privacy Policy",
    "Terms of Use",
    "Cookie Policy",
  ];

  return (
    <div className="w-full h-full px-10 pt-10 pb-10 flex justify-start text-sm sm:px-5 sm:pb-5 ">
      <div className="flex flex-wrap gap-5 ">
        {legalLinks.map((content, index) => {
          return <p key={index}>{content}</p>;
        })}
      </div>
    </div>
  );
};

export { LegislativeLinks };
