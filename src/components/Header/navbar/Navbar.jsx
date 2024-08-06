import React, { useEffect, useState } from "react";
import { FiPhone } from 'react-icons/fi';

import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (menu) => {
    if (dropdownOpen === menu) {
      setDropdownOpen(null);
    } else {
      setDropdownOpen(menu);
    }
  };

  const closeDropdown = (event) => {
    if (!event.target.closest(".dropdown-container")) {
      setDropdownOpen(null);
    }
  };

  return (
    <div>
      <nav className="main-nav bg-white border-gray-200 px-4 lg:px-6 py-6 top-0 z-50 sticky">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <ul className="flex flex-col lg:flex-row lg:space-x-8 mt-4 lg:mt-0 font-bold  ">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700" : "text-black"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Home
              </NavLink>
            </li>
            <li
              className="relative"
              onMouseEnter={() => toggleDropdown("about")}
              onMouseLeave={closeDropdown}
            >
              <div className=" cursor-pointer text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`">
                About Us
              </div>
              {dropdownOpen === "about" && (
                <ul className="absolute bg-white border mt-0 rounded-lg shadow-lg w-48 z-10">
                  <li>
                    <NavLink
                      to="/school-profile"
                      className="block px-4 py-2 text-gray-800 hover:bg-green-200"
                    >
                      School Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/message-from-principal"
                      className="block px-4 py-2 text-gray-800 hover:bg-green-200"
                    >
                      Message from Principal
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/message-from-chairman"
                      className="block px-4 py-2 text-gray-800 hover:bg-green-200"
                    >
                      Message from Chairman
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/message-from-vc"
                      className="block px-4 py-2 text-gray-800 hover:bg-green-200"
                    >
                      Message from Vice-Chair
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/our-history"
                      className="block px-4 py-2 text-gray-800 hover:bg-green-200"
                    >
                      Our History
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li
              className="relative"
              onMouseEnter={() => toggleDropdown("admission")}
              onMouseLeave={closeDropdown}
            >
              <div className=" cursor-pointer text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`">
                Admission
              </div>
              {dropdownOpen === "admission" && (
                <ul className="absolute bg-white border mt-0 rounded-lg shadow-lg w-48 z-10">
                  <li>
                    <NavLink
                      to="/admission-procedure"
                      className="block px-4 py-2 text-gray-800 hover:bg-green-200"
                    >
                      Admission Procedure
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/fee-structure"
                      className="block px-4 py-2 text-gray-800 hover:bg-green-200"
                    >
                      Fee Structure
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/admission-form"
                      className="block px-4 py-2 text-gray-800 hover:bg-green-200"
                    >
                      Admission Form
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/online-admission-form"
                      className="block px-4 py-2 text-gray-800 hover:bg-green-200"
                    >
                      Online Admission Form
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/other-details"
                      className="block px-4 py-2 text-gray-800 hover:bg-green-200"
                    >
                      Other Details
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>

            <li
              className="relative"
              onMouseEnter={() => toggleDropdown("academics")}
              onMouseLeave={closeDropdown}
            >
              <div className=" cursor-pointer text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`">
                Academics
              </div>
              {dropdownOpen === "academics" && (
                <ul className="absolute bg-white border mt-0 rounded-lg shadow-lg w-48">
                  <li>
                    <NavLink
                      to="/approach"
                      className="block px-4 py-2 text-gray-800 hover:bg-green-200"
                    >
                      Approach
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/curriculum"
                      className="block px-4 py-2 text-gray-800 hover:bg-green-200"
                    >
                      Curriculum
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/faculty"
                      className="block px-4 py-2 text-gray-800 hover:bg-green-200"
                    >
                      Faculty
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/infrastructure"
                      className="block px-4 py-2 text-gray-800 hover:bg-green-200"
                    >
                      Infrastructure
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li
              className="relative"
              onMouseEnter={() => toggleDropdown("beyondAcademics")}
              onMouseLeave={closeDropdown}
            >
              <div className=" cursor-pointer text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`">
                Beyond Academics
              </div>
              {dropdownOpen === "beyondAcademics" && (
                <ul className="absolute bg-white border mt-0 rounded-lg shadow-lg w-48 z-10">
                  <li>
                    <NavLink
                      to="/co-curricular"
                      className="block px-4 py-2 text-gray-800 hover:bg-green-200"
                    >
                      Co-Curricular
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/play-area"
                      className="block px-4 py-2 text-gray-800 hover:bg-green-200"
                    >
                      Play Area
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <NavLink
                to="/courses"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700" : "text-black"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/notice"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700" : "text-black"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Notice
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/career"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700" : "text-black"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Career
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700" : "text-black"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="text-black text-lg font-bold flex">
            <FiPhone size={24} color="#555" />
            <h1 className="pl-2">+91 9957######</h1>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
