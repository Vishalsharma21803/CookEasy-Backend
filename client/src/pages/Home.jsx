// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import API from "../api/api";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const res = await API.get("/recipes");
        setRecipes(res.data);
      } catch (err) {
        console.error("Error fetching recipes:", err);
      }
    }

    fetchRecipes();
  }, []);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.tags?.some((tag) =>
      tag.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white px-4 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center drop-shadow">
          🍳 CookEasy - Discover Simple Recipes
        </h1>

        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {filteredRecipes.length === 0 ? (
          <p className="text-center text-xl text-gray-600 mt-16">
            No recipes found.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe._id} recipe={recipe} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
