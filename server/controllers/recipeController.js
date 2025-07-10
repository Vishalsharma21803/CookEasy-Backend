const Recipe=require('../models/Recipe');

exports.createRecipe=async (req,res)=>{
    const{title, ingredients, steps, tags, cookTime, difficulty, image}=req.body;
    try{
        const newRecipe=await new Recipe({
            title,
            ingredients,
            steps,
            tags,
            cookTime,
            difficulty,
            image,
            createdBy:req.user.id // comes from authMiddleware
        });
        await newRecipe.save();
        res.status(201).json(newRecipe);
    }
    catch(err){
        res.status(500).json({msg:"Error creating recipe", error:err.message});
    }
};

exports.getAllRecipe= async(req,res)=>{

    try{
        const recipes=await Recipe.find().populate('createdBy','username');
        res.json(recipes);
    }
    catch(err){
        res.status(500).json({msg:"Error Occurred", error:err.message});
    }
};

exports.getRecipeById=async(req,res)=>{
    try{

        const recipe=await Recipe.findById(req.params.id).populate('createdBy','username');
        if(!recipe){
            res.status(404).json({msg:"recipe not found"});
        }
        res.json(recipe);
    }
    catch(err){
        res.status(500).json({msg:"Error", error:err.message});
    }
};

exports.updateRecipe=async(req,res)=>{
    try{
        const update=await Recipe.findByIdAndUpdate(req.params.id, req.body,{new:true});
        res.json(update);
    }
    catch(err){
        res.status(500).json({msg:"Error", error:err.message});

    }
};

exports.getMyRecipes = async (req, res) => {
  try {
    console.log("req.user:", req.user); 
    const userId = req.user._id;

    const recipes = await Recipe.find({ createdBy: userId }).sort({ createdAt: -1 });

    res.json(recipes);
  } catch (err) {
    console.error('Error fetching user recipes:', err);
    res.status(500).json({ msg: 'Server error fetching your recipes' });
  }
};

exports.deleteRecipe= async(req,res)=>{
    try{
        await Recipe.findByIdAndDelete(req.params.id);
        res.json({msg:"recipe deleted successfully"});
    }
    catch(err){
        res.status(500).json({msg:"Error", error:err.message});
    }
};
