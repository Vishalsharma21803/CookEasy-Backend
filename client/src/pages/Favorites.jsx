// src/pages/Favorites.jsx
import React, { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import API from '../api/api';
import { AuthContext } from '../context/AuthContext';
import RecipeCard from '../components/RecipeCard'; // Reuse existing recipe card layout

function Favorites() {
  const { token } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const res = await API.get('/favorites', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setFavorites(res.data.favorites || []);
      } catch (err) {
        console.error('Error fetching favorites:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, [location.pathname, token]);

  if (loading) return <div className="text-center mt-20">Loading favorites...</div>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Your Favorite Recipes</h1>

      {favorites.length === 0 ? (
        <p className="text-gray-600">You haven't added any favorites yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {favorites.map((recipe) => (
            <RecipeCard key={recipe._id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
