import { Link, NavLink } from "react-router-dom";

import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="bg-gradient-to-t from-purple-300 to-pink-200 shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div>
            <h1 className="font-bold uppercase ">
              <Link to="/" className="hover:text-white">
                Tasty Food
              </Link>
            </h1>
          </div>
          <button onClick={toggleMenu} className="md:hidden text-purple-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <div className="hidden md:flex space-x-4">
            <ul className="flex space-x-4">
              <li className="text-gray-700 font-bold hover:text-white ">
                <NavLink to="/" className=" pr-5">
                  Home
                </NavLink>
              </li>
              <li className="">
                <NavLink to="/recipes" className="pr-2 hover:text-white ">
                  Recipes
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`md:hidden ${
            isOpen ? "block" : "hidden"
          } absolute right-0 mt-2 mr-4`}
        >
          <ul className="bg-gradient-to-t from-purple-300 to-pink-200 p-4 py-5 ">
            <li className="text-gray-700 font-bold hover:text-white ">
              <NavLink to="/" className=" pr-5">
                Home
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/recipes" className="pr-2 hover:text-white ">
                Recipes
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
