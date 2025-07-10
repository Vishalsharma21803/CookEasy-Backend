import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Header() {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Style for active links
  const navLinkStyle = (path) =>
    `block px-3 py-2 rounded-md text-sm font-medium transition duration-200 ${
      location.pathname === path
        ? "bg-green-600 text-white"
        : "text-gray-700 hover:bg-green-100 hover:text-green-700"
    }`;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/home"
          className="text-2xl font-extrabold text-green-600 tracking-tight"
        >
          CookEasy<span className="text-orange-500">🍴</span>
        </Link>

        {/* Hamburger button (mobile) */}
        <button
          className="md:hidden flex items-center px-2 py-1 border rounded text-green-700 border-green-700"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation */}
        <nav
          className={`
            flex-col md:flex-row md:flex gap-2 md:gap-4 items-center
            absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none z-40
            transition-all duration-200
            ${menuOpen ? "flex" : "hidden md:flex"}
          `}
        >
          <Link
            to="/home"
            className={navLinkStyle("/")}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/my-recipes"
            className={navLinkStyle("/my-recipes")}
            onClick={() => setMenuOpen(false)}
          >
            My Recipes
          </Link>
          <Link
            to="/add-recipe"
            className={navLinkStyle("/add-recipe")}
            onClick={() => setMenuOpen(false)}
          >
            Add Recipe
          </Link>
          <Link
            to="/favorites"
            className={navLinkStyle("/favorites")}
            onClick={() => setMenuOpen(false)}
          >
            Favorites ❤️
          </Link>

          {user ? (
            <>
              <Link
                to="/profile"
                className={navLinkStyle("/profile")}
                onClick={() => setMenuOpen(false)}
              >
                {user.username}
              </Link>
              <button
                onClick={() => {
                  logout();
                  setMenuOpen(false);
                }}
                className="ml-2 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 text-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className={navLinkStyle("/login")}
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className={navLinkStyle("/register")}
                onClick={() => setMenuOpen(false)}
              >
                Register
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
