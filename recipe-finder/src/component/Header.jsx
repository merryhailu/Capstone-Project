import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import { useRef } from "react";

const Header = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <div className=" bg-gradient-to-t from-purple-300 to-pink-200 p-5">
        <nav
          ref={navRef}
          className="flex justify-between items-center md:justify-evenly"
        >
          <div>
            <h1 className="font-bold uppercase ">
              <Link to="/" className="hover:text-white">
                Tasty Food
              </Link>
            </h1>
          </div>

          <ul className="flex justify-between ">
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
          <div
            className=" nav-btn cursor-pointer sm:hidden "
            onClick={showNavbar}
          >
            <FaBars />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
