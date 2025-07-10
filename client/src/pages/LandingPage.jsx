import { useState } from "react";
import {
  FaSearch,
  FaClock,
  FaTags,
  FaSignal,
  FaHeart,
  FaPlusCircle,
  FaComments,
  FaUserCircle,
  FaBookOpen,
  FaUsers,
} from "react-icons/fa";
import LandingHeader from "../components/landing/LandingHeader";
import LandingHero from "../components/landing/LandingHero";
import LandingFeatures from "../components/landing/LandingFeatures";
import LandingHowItWorks from "../components/landing/LandingHowItWorks";
import LandingFooter from "../components/landing/LandingFooter";

// Expanded features array with icons and descriptions
const features = [
  {
    icon: <FaSearch className="h-8 w-8 text-green-600" />,
    title: "Smart Recipe Search",
    description: "Find any recipe instantly with our powerful search engine. Filter by ingredients, cuisine, or dietary preferences.",
  },
  {
    icon: <FaClock className="h-8 w-8 text-amber-500" />,
    title: "Cooking Time Tracker",
    description: "Know exactly how long each recipe takes. Plan your meals with precise timing information.",
  },
  {
    icon: <FaTags className="h-8 w-8 text-blue-500" />,
    title: "Smart Tags & Categories",
    description: "Easily find recipes with tags like veg, dinner, breakfast, tasty, and more. Perfect organization.",
  },
  {
    icon: <FaSignal className="h-8 w-8 text-purple-500" />,
    title: "Difficulty Levels",
    description: "Choose recipes that match your skill level - from easy beginner dishes to challenging masterpieces.",
  },
  {
    icon: <FaHeart className="h-8 w-8 text-pink-500" />,
    title: "One-Click Favorites",
    description: "Save your favorite recipes instantly. Build your personal collection of go-to dishes.",
  },
  {
    icon: <FaPlusCircle className="h-8 w-8 text-green-500" />,
    title: "Create & Share Recipes",
    description: "Share your culinary creations with the community. Edit and manage your recipes anytime.",
  },
  {
    icon: <FaComments className="h-8 w-8 text-orange-400" />,
    title: "Community Comments",
    description: "Connect with fellow food lovers. Share tips, variations, and cooking experiences.",
  },
  {
    icon: <FaUserCircle className="h-8 w-8 text-gray-500" />,
    title: "Personal Profile",
    description: "Track your cooking journey. View your created recipes, favorites, and cooking achievements.",
  },
];

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <LandingHeader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <LandingHero />
      <LandingFeatures features={features} />
      <LandingHowItWorks />
      <LandingFooter />
    </div>
  );
}