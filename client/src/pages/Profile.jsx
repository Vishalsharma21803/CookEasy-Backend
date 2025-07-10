import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import API from '../api/api';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaEnvelope, FaCalendarAlt, FaHeart, FaListUl } from 'react-icons/fa';

function Profile() {
  const { token } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await API.get('/user/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUserInfo(res.data);
      } catch (err) {
        console.error('Error fetching profile:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [token]);

  if (loading) return <div className="flex items-center justify-center min-h-screen text-lg text-gray-500">Loading your profile...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="relative h-40 bg-gradient-to-r from-green-400 to-green-600">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            <div className="absolute bottom-5 left-6 flex items-center gap-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md">
                <FaUserCircle className="text-green-600 text-4xl" />
              </div>
              <div className="text-white">
                <h1 className="text-2xl font-bold">{userInfo.username}</h1>
                <p className="text-sm text-green-100 flex items-center gap-2">
                  <FaEnvelope className="text-green-100" /> {userInfo.email}
                </p>
                <p className="text-sm text-green-100 flex items-center gap-2">
                  <FaCalendarAlt className="text-green-100" /> Joined: {new Date(userInfo.joined).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-green-100 rounded-xl p-6 text-center shadow-md">
            <FaListUl className="mx-auto text-2xl text-green-700 mb-2" />
            <div className="text-2xl font-bold text-green-800">{userInfo.totalRecipes}</div>
            <p className="text-sm text-gray-700">Recipes Created</p>
          </div>
          <div className="bg-pink-100 rounded-xl p-6 text-center shadow-md">
            <FaHeart className="mx-auto text-2xl text-pink-600 mb-2" />
            <div className="text-2xl font-bold text-pink-700">{userInfo.totalFavorites}</div>
            <p className="text-sm text-gray-700">Favorite Recipes</p>
          </div>
        </div>

        {/* Favorite Recipes */}
        {userInfo.favorites.length > 0 && (
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-2xl font-semibold text-green-800 mb-4 flex items-center gap-2">
              <FaHeart className="text-xl text-pink-600" /> Favorite Recipes
            </h3>
            <ul className="space-y-3">
              {userInfo.favorites.map((fav) => (
                <li key={fav._id}>
                  <Link
                    to={`/recipes/${fav._id}`}
                    className="text-green-600 hover:text-green-800 hover:underline transition"
                  >
                    {fav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
