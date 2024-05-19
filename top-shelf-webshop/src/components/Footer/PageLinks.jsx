import React from "react";

const PageLinks = () => {
  const pageLinksContent = [
    {
      title: "Company",
      links: [
        "About Us",
        "Locations",
        "Careers",
        "Leadership",
        "Partners",
        "Contact Us",
      ],
    },
    {
      title: "Categories",
      links: [
        "Gadgets",
        "Beauty",
        "Groceries",
        "Home Decoration",
        "Mens Fashion",
        "Womens Fashion",
        "Automotive",
        "Lighting",
      ],
    },
    {
      title: "Resources",
      links: [
        "Why Us",
        "Testimonials",
        "Blog",
        "Guides",
        "Customer Support",
        "Delivery",
        "Return Policy",
      ],
    },
    {
      title: "Socials",
      links: ["LinkedIn", "X", "Facebook", "Instagram"],
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-10 px-10 py-10  md:grid-cols-4">
      {pageLinksContent.map((data, index) => {
        return (
          <div key={index} className="flex flex-col gap-5">
            <p className="font-semibold">{data.title}</p>
            <div className="flex flex-col gap-1">
              {data.links.map((link, linkIndex) => (
                <p key={linkIndex} className="text-sm">
                  {link}
                </p>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { PageLinks };
