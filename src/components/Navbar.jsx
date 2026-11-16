
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg px-6 py-4">

      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/login"
          className="text-2xl font-bold text-purple-600"
        >
          MyApp<span className="text-pink-500">.</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-3">

          <NavLink
            to="/login"
            className={({ isActive }) =>
              `px-5 py-2 rounded-xl font-semibold transition duration-300 ${
                isActive
                  ? "bg-purple-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-purple-100 hover:text-purple-600"
              }`
            }
          >
            Login
          </NavLink>

          <NavLink
            to="/signup"
            className={({ isActive }) =>
              `px-5 py-2 rounded-xl font-semibold transition duration-300 ${
                isActive
                  ? "bg-purple-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-purple-100 hover:text-purple-600"
              }`
            }
          >
            Signup
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `px-5 py-2 rounded-xl font-semibold transition duration-300 ${
                isActive
                  ? "bg-purple-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-purple-100 hover:text-purple-600"
              }`
            }
          >
            Dashboard
          </NavLink>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;
