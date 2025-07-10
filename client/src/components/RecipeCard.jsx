// src/components/RecipeCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

function RecipeCard({ recipe }) {
  // Choose emoji based on difficulty
  const getDifficultyLabel = (difficulty) => {
    switch (difficulty?.toLowerCase()) {
      case "easy":
        return "🟢 Easy";
      case "medium":
        return "🟠 Medium";
      case "hard":
        return "🔴 Hard";
      default:
        return difficulty || "Unknown";
    }
  };

  return (
    <div className="bg-white shadow-md hover:shadow-xl transition duration-300 rounded-2xl overflow-hidden border border-gray-100 hover:border-green-400">
      <Link to={`/recipes/${recipe._id}`}>
        <img
          src={recipe.image || "https://source.unsplash.com/400x300/?food"}
          alt={recipe.title}
          className="w-full h-48 object-cover"
        />
      </Link>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-xl font-semibold text-gray-800">
            {recipe.title}
          </h2>
          <FavoriteButton recipeId={recipe._id} />
        </div>

        {/* Difficulty + Cook Time */}
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>⏱️ {recipe.cookTime || "N/A"} min</span>
          <span>{getDifficultyLabel(recipe.difficulty)}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {recipe.tags?.map((tag, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
