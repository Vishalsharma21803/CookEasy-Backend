import { Link } from "react-router-dom";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import LandingButton from "./LandingButton";

export default function LandingHeader({ isMenuOpen, setIsMenuOpen }) {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-extrabold text-green-600 tracking-tight"
            >
              CookEasy<span className="text-orange-500">🍴</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/login"
              className="text-gray-700 hover:text-green-600 transition"
            >
              Recipes
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-green-600 transition"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-green-600 transition"
            >
              Contact
            </Link>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <LandingButton variant="outline">
              <Link to="/login">Login</Link>
            </LandingButton>
            <LandingButton>
              <Link to="/register">Sign Up</Link>
            </LandingButton>
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link to="/login" className="text-gray-700 hover:text-green-600">
                Recipes
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-green-600">
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-green-600"
              >
                Contact
              </Link>
              <div className="flex space-x-4 pt-4">
                <LandingButton variant="outline" size="sm">
                  <Link to="/login">Login</Link>
                </LandingButton>
                <LandingButton size="sm">
                  <Link to="/register">Sign Up</Link>
                </LandingButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
