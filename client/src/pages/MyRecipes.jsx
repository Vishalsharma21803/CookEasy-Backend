import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import API from "../api/api";
import RecipeCard from "../components/RecipeCard";
import { toast } from "react-toastify"; // <-- Add this import

function MyRecipes() {
  const { token } = useContext(AuthContext);
  const [myRecipes, setMyRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyRecipes = async () => {
      try {
        const res = await API.get("/recipes/my-recipes", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMyRecipes(res.data);
      } catch (err) {
        console.error("Error fetching your recipes:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMyRecipes();
  }, [token]);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this recipe?"
    );
    if (!confirmDelete) return;

    try {
      await API.delete(`/recipes/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setMyRecipes((prev) => prev.filter((recipe) => recipe._id !== id));
      toast.success("Recipe deleted successfully!"); // <-- Toast message
    } catch (err) {
      console.error("Error deleting recipe:", err);
      toast.error("Something went wrong while deleting."); // <-- Toast message
    }
  };

  if (loading)
    return <div className="text-center mt-20">Loading your recipes...</div>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-6">My Recipes</h1>

      {myRecipes.length === 0 ? (
        <p className="text-gray-600">You haven’t added any recipes yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {myRecipes.map((recipe) => (
            <div key={recipe._id} className="relative group">
              <RecipeCard recipe={recipe} />

              <div className="absolute top-2 right-2 flex flex-col sm:flex-row gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <Link
                  to={`/edit-recipe/${recipe._id}`}
                  className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-lg shadow-md transition duration-200"
                >
                  ✏️ Edit
                </Link>
                <button
                  onClick={() => handleDelete(recipe._id)}
                  className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded-lg shadow-md transition duration-200"
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyRecipes;