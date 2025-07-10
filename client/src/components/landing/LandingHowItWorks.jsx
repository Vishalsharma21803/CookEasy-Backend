import { FaSearch, FaBookOpen, FaUsers } from "react-icons/fa";

export default function LandingHowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How CookEasy Works</h2>
          <p className="text-xl text-gray-600">Get started in just three simple steps</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaSearch className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Search & Discover</h3>
            <p className="text-gray-600">
              Browse thousands of recipes or search for specific dishes, ingredients, or cuisines.
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaBookOpen className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Cook & Create</h3>
            <p className="text-gray-600">
              Follow detailed instructions or create your own recipes to share with the community.
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaUsers className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Share & Connect</h3>
            <p className="text-gray-600">
              Connect with fellow food lovers, share experiences, and build your culinary network.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}