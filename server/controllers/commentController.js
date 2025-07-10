const Recipe=require('../models/Recipe');

exports.addComment= async(req,res)=>{
    try{
        const recipe=await Recipe.findById(req.params.id);
        if(!recipe){
            res.status(404).json({msg:"Recipe not found"});
        }
        const newcomment={
            text:req.body.text,
            author:req.user.id
        }

        recipe.comments.push(newcomment);
        await recipe.save();
        res.status(201).json({ msg: "Comment added", comments: recipe.comments });



    }
    catch(err){
        res.status(500).json({msg:"Error", error:err.message});
    }
};

exports.getComment=async(req, res)=>{
    try{
        const recipe= await Recipe.findById(req.params.id);
        res.json(recipe.comments);

    }
    catch(err){
        res.status(500).json({msg:"Error",error:err.message});
    }
};

exports.deleteComment= async (req,res)=>{
    try{
        const recipe=await Recipe.findById(req.params.recipeId);
        if(!recipe){
            res.status(404).json({msg:"Recipe not found"});
        }
        // Find the comment index
        const commentIndex = recipe.comments.findIndex(
            (c) => c._id.toString() === req.params.commentId
        );
        if (commentIndex === -1) {
            return res.status(404).json({ msg: "Comment not found" });
        }
        // Remove the comment
        recipe.comments.splice(commentIndex, 1);
        await recipe.save();
        res.json({msg:"comment deleted"});
    }
    catch(err){
        res.status(500).json({msg:"Error",error:err.message});
    }
};