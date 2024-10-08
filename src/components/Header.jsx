import React, { useState } from "react";

const Header = () => {
  const [brandName, setBrandName] = useState("AC");
  const [menulinks, setMenuLinks] = useState([
    {
      title: "Home",
      link: "#home", // Anchor link to section with id="home"
      id: 1,
    },
    {
      title: "About",
      link: "#about", // Anchor link to section with id="about"
      id: 2,
    },
    {
      title: "Projects",
      link: "#projects", // Anchor link to section with id="projects"
      id: 3,
    },
    {
      title: "Expertise",
      link: "#expertise", // Anchor link to section with id="expertise"
      id: 4,
    },
    {
      title: "Contact",
      link: "#contact", // Anchor link to section with id="contact"
      id: 5,
    },
  ]);

  const [actionButton, setActionButton] = useState({
    title: "LeetCode",
    link: "https://leetcode.com/u/ayushman2022/",
  });

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div id="home" className="h-20 border Main flex justify-between items-center px-4 sm:px-8 md:px-16 bg-slate-200">
        <div>
          {/* Name */}
          <h1 className="font-bold text-xl sm:text-2xl">{brandName}</h1>
        </div>

        <div className="hidden sm:flex space-x-2 md:space-x-4">
          {/* Menu */}
          {menulinks.map((link) => (
            <a key={link.id} href={link.link} className="hover:text-blue-400 text-sm sm:text-base">
              {link.title}
            </a>
          ))}
        </div>

        <div>
          {/* Action Button */}
          <a
            href={actionButton.link}
            target="_blank" // Opens the link in a new tab
            className="bg-orange-600 text-black shadow px-2 py-1 sm:px-4 sm:py-2 rounded-full text-sm sm:text-1xl font-semibold"
          >
            {actionButton.title}
          </a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button className="sm:hidden focus:outline-none" onClick={toggleMenu}>
          {/* Hamburger icon */}
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {menuOpen && (
        <div className="sm:hidden flex flex-col space-y-2 mt-4 items-center bg-slate-100 p-4 rounded-lg">
          {menulinks.map((link) => (
            <a key={link.id} href={link.link} className="hover:text-blue-400 text-base">
              {link.title}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;
