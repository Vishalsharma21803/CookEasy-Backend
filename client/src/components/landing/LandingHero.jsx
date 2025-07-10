import { Link } from "react-router-dom";
import { FaArrowRight, FaPlay, FaCheckCircle, FaClock } from "react-icons/fa";
import LandingButton from "./LandingButton";

export default function LandingHero() {
  return (
    <section className="bg-gradient-to-br from-green-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Cook <span className="text-green-600">Delicious</span> Meals with <span className="text-green-600">Ease</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover thousands of tested recipes, create your own culinary masterpieces, and join a community of passionate food lovers. Cooking has never been this easy!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <LandingButton size="lg">
                <Link to="/register" className="flex items-center">
                  Get Started Free
                  <FaArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </LandingButton>
              <LandingButton size="lg" variant="outline">
                <Link to="/login" className="flex items-center">
                  <FaPlay className="mr-2 h-5 w-5" />
                  Explore Recipes
                </Link>
              </LandingButton>
            </div>
            <div className="flex items-center gap-8 mt-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="h-5 w-5 text-green-600" />
                <span>100+ Recipes</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="h-5 w-5 text-green-600" />
                <span>Free Forever</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="h-5 w-5 text-green-600" />
                <span>Active Community</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://res.cloudinary.com/dm9tjorz5/image/upload/v1751995162/Image-1_Palak-Paneer-2_dxocff.png"
                  alt="Delicious cooking"
                  className="object-cover w-full h-full"
                  style={{ height: "100%", width: "100%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center gap-2">
                <FaClock className="h-5 w-5 text-green-600" />
                <span className="font-semibold">30 min</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}