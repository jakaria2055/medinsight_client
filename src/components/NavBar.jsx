import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 border-b border-white/25 w-full 
                sticky top-0 z-50 backdrop-blur-md">
      {/* Logo */}
      <h1 className="ml-5 text-2xl font-bold text-indigo-700">MedInsight</h1>

      {/* Menu Items */}
      <ul
        className={`max-md:absolute max-md:h-full max-md:z-50 max-md:w-full max-md:top-0 transition-all duration-300
          max-md:backdrop-blur max-md:bg-white/70 max-md:text-base flex flex-col md:flex-row items-center justify-center gap-8 font-medium
          ${menuOpen ? "max-md:left-0" : "max-md:-left-full"}
        `}
      >
        <Link
          to="/admin-dashboard"
          className="hover:text-slate-500 cursor-pointer"
        >
          Admin Dashboard
        </Link>

        {/* Close Menu Button (Mobile) */}
        <button
          onClick={() => setMenuOpen(false)}
          className="md:hidden bg-gray-800 hover:bg-black text-white p-2 rounded-md aspect-square font-medium transition absolute top-5 right-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </ul>

      {/* Open Menu Button (Mobile) */}
      <button onClick={() => setMenuOpen(true)} className="md:hidden">
        <img className="h-10 w-10" src="/icon/admin_logo.svg" alt="Menu Icon" />
      </button>

      {/* Right Side Button */}
      <div>
        <Link
          to="/signin"
          className="max-md:hidden px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 transition rounded-full"
        >
          Admin Login
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
