import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactMe() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center py-16">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full">
        <h2 className="text-3xl font-bold text-green-700 mb-4 text-center">Contact Vishal Sharma</h2>
        <p className="text-gray-600 mb-6 text-center">
          Feel free to reach out for collaborations, questions, or just to say hello!
        </p>
        <ul className="space-y-4">
          <li className="flex items-center gap-3">
            <a
                  href="mailto:vishal2003ggg@gmail.com"
                  className="flex items-center gap-2 hover:text-green-600 transition"
                  title="Email"
                >
                  <FaEnvelope className="text-red-400" /> vishal2003ggg@gmail.com
                </a>
          </li>
          <li className="flex items-center gap-3">
            <a
                  href="tel:+917973017760"
                  className="flex items-center gap-2 hover:text-green-600 transition"
                  title="Phone"
                >
                  <FaPhone className="text-green-400" /> +91 7973017760
                </a>
          </li>
          <li className="flex items-center gap-3">
            <FaGithub className="text-gray-700" />
            <a
              href="https://github.com/Vishalsharma21803"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 hover:underline"
            >
              github.com/vishalsharma
            </a>
          </li>
          <li className="flex items-center gap-3">
            <FaLinkedin className="text-blue-500" />
            <a
              href="https://www.linkedin.com/in/vishalsharma9982"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 hover:underline"
            >
              linkedin.com/in/vishalsharma
            </a>
          </li>
        </ul>
        <div className="mt-8 text-center">
          <a
            href="https://github.com/Vishalsharma21803/CookEasy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded hover:bg-green-700 transition"
          >
            <FaGithub className="h-5 w-5" />
            Project GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
}