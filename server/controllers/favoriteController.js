const User=require('../models/Users');
const Recipe=require('..//models/Recipe');

exports.addFavorite= async(req,res)=>{
    try{
        const userId=req.user.id;
        const {recipeId}=req.params;
        const user=await User.findById(userId);
        if(!user.favorites.includes(recipeId)){
            user.favorites.push(recipeId);
            await user.save();
        }
        res.json({msg:"added to favorites"});
    }
    catch(err){
        res.status(500).json({msg:"Error", error:err.message});
    }
};

exports.removeFavorite=async(req,res)=>{
    try{
        const userId=req.user.id;
        const {recipeId}=req.params;
        const user= await User.findById(userId);
        user.favorites=user.favorites.filter(id => id.toString()!==recipeId);
        await user.save();
        res.json({ msg: "Recipe removed from favorites" });
    }
    catch (err) {
        res.status(500).json({ msg: "Error removing from favorites", error: err.message });
  }
};

exports.getFavorite=async (req,res)=>{
    try{
        const user=await User.findById(req.user.id).populate("favorites");
        console.log("successfully shown favorites");
        res.json({ favorites: user.favorites });
    }
    catch (err) {
        res.status(500).json({ msg: "Error fetching favorites", error: err.message });
  }
};