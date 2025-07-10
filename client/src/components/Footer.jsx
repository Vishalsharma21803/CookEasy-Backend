import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-100 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <p>&copy; {new Date().getFullYear()} CookEasy. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="https://github.com/Vishalsharma21803" target="_blank" rel="noopener noreferrer" className="hover:text-green-600">
            GitHub Profile
          </a>
          
<a href="https://github.com/Vishalsharma21803/CookEasy" target="_blank" rel="noopener noreferrer" className="hover:text-green-600">
  Project Source
</a>
          <a href="/privacy" className="hover:text-green-600">Privacy</a>
          <a href="/contact" className="hover:text-green-600">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
