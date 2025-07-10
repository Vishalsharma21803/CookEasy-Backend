import { Link } from "react-router-dom";
import {
  FaUser,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function LandingFooter() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link
              to="/"
              className="text-2xl font-extrabold text-white-600 tracking-tight"
            >
              CookEasy<span className="text-orange-500">🍴</span>
            </Link>
            <p className="text-gray-400 mb-2">
              Created by{" "}
              <span className="font-semibold text-white">Vishal Sharma</span>
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://github.com/Vishalsharma21803"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <FaGithub className="h-6 w-6 text-gray-300 hover:text-white transition" />
              </a>
              <a
                href="https://www.linkedin.com/in/vishalsharma9982"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <FaLinkedin className="h-6 w-6 text-blue-400 hover:text-white transition" />
              </a>
              <a href="mailto:vishal2003ggg@gmail.com" title="Email">
                <FaEnvelope className="h-6 w-6 text-red-400 hover:text-white transition" />
              </a>
              <a href="tel:+917973017760" title="Phone">
                <FaPhone className="h-6 w-6 text-green-400 hover:text-white transition" />
              </a>
            </div>
            {/* Project GitHub Repo link */}
            <a
              href="https://github.com/Vishalsharma21803/CookEasy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mt-4 text-gray-400 hover:text-white transition"
              title="Project GitHub Repo"
            >
              <FaGithub className="h-6 w-6" />
              <span>Project Source</span>
            </a>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="mailto:vishal2003ggg@gmail.com"
                  className="flex items-center gap-2 hover:text-white transition"
                  title="Email"
                >
                  <FaEnvelope className="text-red-400" /> vishal2003ggg@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+917973017760"
                  className="flex items-center gap-2 hover:text-white transition"
                  title="Phone"
                >
                  <FaPhone className="text-green-400" /> +91 7973017760
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Vishalsharma21803"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition"
                  title="GitHub"
                >
                  <FaGithub className="text-gray-300" /> github.com/Vishalsharma21803
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/vishalsharma9982"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition"
                  title="LinkedIn"
                >
                  <FaLinkedin className="text-blue-400" /> linkedin.com/in/vishalsharma9982
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; 2025 CookEasy. All rights reserved. Made with ❤️ by Vishal
            Sharma.
          </p>
        </div>
      </div>
    </footer>
  );
}
