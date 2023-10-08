import React, { useState, useEffect } from "react";
// import image from '../logo.png'
import { NavLink } from "react-router-dom";

export default function Navigationbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const HandlethemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink to="/home" className="flex items-center">
            {/* <img className='w-[45px] h-[45px]   mr-3 ring-2 ring-blue-400  rounded-full'  src={image} alt="" /> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Blogbites
            </span>
          </NavLink>
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="text-gray-900 bg-gray-400 hover:bg-gray-300  font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:text-white dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              {isMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/home"
                  className={`block py-2 pl-3 pr-4  md:hover:text-blue-700 md:p-0 dark:text-white`}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={`block py-2 pl-3 pr-4  md:hover:text-blue-700 md:p-0  dark:text-white`}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={`block py-2 pl-3 pr-4  md:hover:text-blue-700 md:p-0  dark:text-white`}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={`block py-2 pl-3 pr-4  md:hover:text-blue-700 md:p-0 dark:text-white`}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" class="sr-only peer" onClick={HandlethemeSwitch}/>
                  <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {theme === 'light'?'Dark Mode':'Light Mode'}
                  </span>
                </label>
              </li>
              <li>
                {/* <button
                  type="button"
                  className="text-gray-900 bg-gray-400 hover:bg-gray-300  font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:text-white dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                  {" "}
                  Post Your Blog
                </button> */}
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
