const Recipe=require('../models/Recipe');
const User = require("../models/Users");

exports.getMyRecipes=async(req, res)=>{
    try{
        const recipes=await Recipe.find({createdBy: req.user.id}).populate('createdBy','username');
        res.status(200).json(recipes);
    }
    catch (err) {
    res.status(500).json({ msg: "Error fetching your recipes", error: err.message });
  }
};


exports.getFavoriteRecipes=async (req, res)=>{
    try{
        const user= await User.findById(req.user.id).populate("favorites");
        if(!user){
            res.status(404).json({msg:"User not found"});
        }
        res.status(200).json(user.favorites);
    }
    catch (err) {
    res.status(500).json({ msg: "Error fetching favorites", error: err.message });
  }
};


exports.getUserProfile = async (req, res) => {
  try {
    const userId = req.user._id;

    const user = await User.findById(userId).select('-password').populate('favorites', 'title');

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    const recipeCount = await Recipe.countDocuments({ createdBy: userId });

    res.json({
      username: user.username,
      email: user.email,
      joined: user._id.getTimestamp(),
      favorites: user.favorites,
      totalFavorites: user.favorites.length,
      totalRecipes: recipeCount
    });
  } catch (err) {
    console.error('Error fetching user profile:', err);
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
};
