import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api/api';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';

function AddRecipe() {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [cookTime, setCookTime] = useState('');
  const [difficulty, setDifficulty] = useState('easy');
  const [ingredients, setIngredients] = useState(['']);
  const [steps, setSteps] = useState(['']);
  const [tags, setTags] = useState('');
  const [imageFile, setImageFile] = useState(null); // file input
  const [imageUrl, setImageUrl] = useState('');     // uploaded image URL
  const [loading, setLoading] = useState(false);

  const handleIngredientChange = (index, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };

  const addIngredientField = () => setIngredients([...ingredients, '']);

  const handleStepChange = (index, value) => {
    const newSteps = [...steps];
    newSteps[index] = value;
    setSteps(newSteps);
  };

  const addStepField = () => setSteps([...steps, '']);

  const handleImageUpload = async () => {
    if (!imageFile) return null;
    const formData = new FormData();
    formData.append('image', imageFile);

    try {
      const res = await API.post('/upload', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      return res.data.imageUrl;
    } catch (err) {
      console.error('Image upload failed:', err);
      toast.error('Image upload failed. Please try again.');
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const uploadedImageUrl = await handleImageUpload();
    if (!uploadedImageUrl) {
      setLoading(false);
      return;
    }

    const trimmedIngredients = ingredients.filter(item => item.trim() !== '');
    const trimmedSteps = steps.filter(step => step.trim() !== '');

    const recipeData = {
      title,
      cookTime,
      difficulty,
      ingredients: trimmedIngredients,
      steps: trimmedSteps,
      tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      image: uploadedImageUrl,
    };

    try {
      await API.post('/recipes', recipeData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success('Recipe added successfully');
      navigate('/home');
    } catch (err) {
      console.error('Error adding recipe:', err);
      toast.error('Failed to add recipe. Please check your inputs.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white px-4 py-10 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold mb-6 text-green-700 text-center drop-shadow">Add New Recipe</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Recipe Title"
            className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 transition"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Cook Time (e.g., 30 mins)"
              className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 transition"
              value={cookTime}
              onChange={(e) => setCookTime(e.target.value)}
              required
            />
            <select
              className="w-40 p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 transition"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-2 text-green-700">Ingredients:</label>
            {ingredients.map((item, index) => (
              <input
                key={index}
                type="text"
                className="w-full mb-2 p-3 border border-green-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 transition"
                placeholder={`Ingredient ${index + 1}`}
                value={item}
                onChange={(e) => handleIngredientChange(index, e.target.value)}
                required
              />
            ))}
            <button
              type="button"
              onClick={addIngredientField}
              className="text-sm text-green-700 hover:underline mt-1"
            >
              + Add Ingredient
            </button>
          </div>

          <div>
            <label className="block font-semibold mb-2 text-green-700">Steps:</label>
            {steps.map((step, index) => (
              <textarea
                key={index}
                className="w-full mb-2 p-3 border border-green-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 transition"
                placeholder={`Step ${index + 1}`}
                value={step}
                onChange={(e) => handleStepChange(index, e.target.value)}
                required
              />
            ))}
            <button
              type="button"
              onClick={addStepField}
              className="text-sm text-green-700 hover:underline mt-1"
            >
              + Add Step
            </button>
          </div>

          <input
            type="text"
            placeholder="Tags (comma-separated)"
            className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 transition"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />

          <div>
            <label className="block font-semibold mb-2 text-green-700">Recipe Image:</label>
            <input
              type="file"
              accept="image/*"
              className="w-full p-2 border border-green-200 rounded-lg"
              onChange={(e) => {
                setImageFile(e.target.files[0]);
                if (e.target.files[0]) {
                  setImageUrl(URL.createObjectURL(e.target.files[0]));
                }
              }}
              required
            />
            {imageUrl && (
              <img
                src={imageUrl}
                alt="Preview"
                className="mt-3 rounded-lg shadow w-full max-h-56 object-cover border"
              />
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition text-lg shadow"
          >
            {loading ? 'Adding...' : 'Add Recipe'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddRecipe;