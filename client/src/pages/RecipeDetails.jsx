import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api/api';
import { AuthContext } from '../context/AuthContext';
import FavoriteButton from '../components/FavoriteButton';
import { FaRegClock, FaUser, FaCalendarAlt, FaUtensils } from "react-icons/fa";
import { toast } from "react-toastify";

function RecipeDetails() {
  const { id } = useParams();
  const { user, token } = useContext(AuthContext);

  const [recipe, setRecipe] = useState(null);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRecipe() {
      try {
        const res = await API.get(`/recipes/${id}`);
        setRecipe(res.data);
      } catch (err) {
        console.error('Error fetching recipe:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchRecipe();
  }, [id]);

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    try {
      const res = await API.post(
        `/comments/${id}`,
        { text: newComment },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setRecipe((prev) => ({
        ...prev,
        comments: res.data.comments,
      }));
      setNewComment('');
      toast.success("Comment added!");
    } catch (err) {
      toast.error("Failed to add comment.");
      console.error('Failed to add comment:', err);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-gray-400">Loading recipe...</div>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-red-500">Recipe not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <div className="overflow-hidden shadow-xl rounded-2xl bg-white">
          {/* Hero Image Section */}
          <div className="relative h-80 md:h-96 w-full overflow-hidden">
            <img
              src={recipe.image || "/placeholder.svg"}
              alt={recipe.title}
              className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">{recipe.title}</h1>
                  {/* Optionally add a description here if you have one */}
                </div>
                {user && (
                  <FavoriteButton recipeId={id} />
                )}
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8">
            {/* Recipe Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-2 p-4 bg-green-100 rounded-lg">
                <FaRegClock className="h-5 w-5 text-green-600" />
                <div>
                  <div className="font-semibold text-green-900">Cook Time</div>
                  <div className="text-sm text-green-700">{recipe.cookTime}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 p-4 bg-amber-100 rounded-lg">
                <FaUtensils className="h-5 w-5 text-amber-600" />
                <div>
                  <div className="font-semibold text-amber-900">Difficulty</div>
                  <div className="text-sm text-amber-700">{recipe.difficulty}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 p-4 bg-orange-100 rounded-lg">
                <FaUser className="h-5 w-5 text-orange-600" />
                <div>
                  <div className="font-semibold text-orange-900">Created By</div>
                  <div className="text-sm text-orange-700">{recipe.createdBy?.username || "Unknown"}</div>
                </div>
              </div>
            </div>

            {/* Ingredients Section */}
            <div className="mb-8 bg-green-50 rounded-xl p-4 border border-green-100">
              <h2 className="text-xl text-green-800 font-semibold mb-3 flex items-center gap-2">
                <FaUtensils className="h-5 w-5" />
                Ingredients
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 hover:bg-green-100 rounded">
                    <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0" />
                    <span className="text-sm">{ingredient}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Instructions Section */}
            <div className="mb-8 bg-amber-50 rounded-xl p-4 border border-amber-100">
              <h2 className="text-xl text-amber-800 font-semibold mb-3">Instructions</h2>
              <div className="space-y-4">
                {recipe.steps.map((step, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-gradient-to-r from-green-50 to-amber-50 rounded-lg">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-sm leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags Section */}
            <div className="mb-8">
              <h2 className="text-xl text-green-800 font-semibold mb-3">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {recipe.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Comments Section */}
            <div className="bg-white rounded-xl p-4 shadow border border-green-100">
              <h2 className="text-xl text-green-800 font-semibold mb-3 flex items-center gap-2">
                <FaUser className="h-5 w-5" />
                Comments ({recipe.comments.length})
              </h2>
              {user && (
                <form onSubmit={handleAddComment} className="mb-6">
                  <textarea
                    className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-green-200 mb-3 min-h-[100px] resize-none"
                    placeholder="Share your thoughts about this recipe..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    rows={3}
                  />
                  <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition"
                    disabled={!newComment.trim()}
                  >
                    Post Comment
                  </button>
                </form>
              )}

              <div className="space-y-4">
                {recipe.comments.length > 0 ? (
                  recipe.comments.map((cmt, i) => (
                    <div key={cmt._id || i} className="border-l-4 border-green-400 bg-green-50 p-4 rounded-r-lg">
                      <p className="text-sm text-gray-800 mb-2 leading-relaxed">{cmt.text}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <FaUser className="h-3 w-3" />
                        <span className="font-medium">{cmt.author?.username || cmt.author || "User"}</span>
                        <span>•</span>
                        <FaCalendarAlt className="h-3 w-3" />
                        <span>
                          {new Date(cmt.createdAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <FaUser className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                    <p>No comments yet. Be the first to share your experience!</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;