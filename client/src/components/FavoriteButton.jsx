// src/components/FavoriteButton.jsx
import React, { useEffect, useState, useContext } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import API from '../api/api';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';

function FavoriteButton({ recipeId }) {
  const { token } = useContext(AuthContext);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const checkIfFavorite = async () => {
      if (!token) return;

      try {
        const res = await API.get('/favorites', {
          headers: { Authorization: `Bearer ${token}` },
        });

        const favorites = res.data.favorites || [];

        const exists = favorites.some(
          (fav) => String(fav._id || fav) === String(recipeId)
        );

        setIsFavorite(exists);
      } catch (err) {
        console.error('Error checking favorite status:', err);
      }
    };

    checkIfFavorite();
  }, [recipeId, token]);

  const toggleFavorite = async (e) => {
    e.stopPropagation(); // Prevent link navigation when inside a clickable card

    if (!token) {
      toast.warning('Please login to use favorites');
      return;
    }

    try {
      if (isFavorite) {
        await API.delete(`/favorites/${recipeId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setIsFavorite(false);
        toast.info('💔 Removed from favorites');
      } else {
        await API.post(`/favorites/${recipeId}`, {}, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setIsFavorite(true);
        toast.success('❤️ Added to favorites');
      }
    } catch (err) {
      console.error('Error toggling favorite:', err);
      toast.error('Something went wrong');
    }
  };

  return (
    <button
      onClick={toggleFavorite}
      className="text-red-500 text-2xl hover:scale-110 transition-transform duration-200"
      aria-label="Toggle Favorite"
    >
      {isFavorite ? <FaHeart /> : <FaRegHeart />}
    </button>
  );
}

export default FavoriteButton;
