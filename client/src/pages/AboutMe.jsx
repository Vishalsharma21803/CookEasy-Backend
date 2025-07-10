import { FaGithub } from "react-icons/fa";

export default function AboutMe() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center py-16">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full">
        <h2 className="text-3xl font-bold text-green-700 mb-4 text-center">About CookEasy</h2>
        <p className="text-gray-700 mb-4 text-center">
          <span className="font-semibold">CookEasy</span> is a modern recipe platform built to make cooking fun, easy, and accessible for everyone.
        </p>
        <p className="text-gray-600 mb-4 text-center">
          Created by <span className="font-semibold text-green-700">Vishal Sharma</span>, CookEasy is designed for food lovers who want to discover, share, and enjoy recipes from around the world.
        </p>
        <p className="text-gray-600 text-center mb-6">
          Whether you’re a beginner or a pro, CookEasy gives you the tools to organize your recipes, connect with a passionate community, and make every meal memorable.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <a
            href="https://github.com/Vishalsharma21803/CookEasy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded hover:bg-green-700 transition"
          >
            <FaGithub className="h-5 w-5" />
            Project GitHub Repo
          </a>
          <a
            href="https://github.com/Vishalsharma21803"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-900 rounded hover:bg-green-100 transition"
          >
            <FaGithub className="h-5 w-5" />
            My GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
}