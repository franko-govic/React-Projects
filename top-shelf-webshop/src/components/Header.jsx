import React, { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    { link: "Home", path: "home" },
    { link: "Shop", path: "shop" },
    { link: "About", path: "about" },
    { link: "Contact", path: "contact" },
  ];

  return (
    <>
      <nav className="bg-white md:px-14 p-4 max-w-screen-2x1 mx-auto text-primary">
        <div className="text-xl container mx-auto flex justify-between">
          <div className="flex space-x-14 items-center">
            <a
              className="text-2x-1 font-semibold flex items-center space-x-3"
              href="/"
            >
              <span>TOP SHELF</span>
            </a>
            <ul className="md:flex space-x-12 hidden">
              {navItems.map(({ link, path }) => (
                <a key={link} href={path} className="block hover:text-gray-300">
                  {link}
                </a>
              ))}
            </ul>
          </div>
          <div className="space-x-12  hidden md:flex items-center">
            <a href="/">Language</a>
            <button className="bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600">
              SignUp
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-grey focus:outline-none focus:text-gray-300"
            >
              {menuOpen ? (
                <FaXmark className="w-6 h-6 text-primary" />
              ) : (
                <FaBars className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`space-y-4 px-4 pt-5 pb-5 bg-blue  ${
          menuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
        }`}
      >
        {navItems.map(({ link, path }) => (
          <a key={link} href={path} className="block hover:text-gray-300">
            {link}
          </a>
        ))}
      </div>
    </>
  );
}

export { Header };
