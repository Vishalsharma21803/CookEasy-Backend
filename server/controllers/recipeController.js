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
            createdBy:req.body.id // comes from authMiddleware
        });
        await newRecipe.save();
        res.status(201).json(newRecipe);
    }
    catch(err){
        res.status(500).json({msg:"Some error occurred", error:err.message});
    }
}

exports.getAllRecipe= async(req,res)=>{

    try{
        const recipes=await Recipe.find().populate('createdBy','username');
        res.json(recipes);
    }
    catch(err){
        res.status(500).json({msg:"Error Occurred", error:err.message});
    }
}